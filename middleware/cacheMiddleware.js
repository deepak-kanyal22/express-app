const cache = {};

const TTL = 60 * 1000;

function cacheMiddleware(req, res, next) {
    const key = req.originalUrl;
    if (req.method === "GET") {
        const cached = cache[key];
        if (cached) {
            const age = Date.now() - cached.createdAt;
            if (age < TTL) {
                res.setHeader("X-Cache", "HIT");
                return res.json(cached.value);
            }
            delete cache[key];
        }
        res.setHeader("X-Cache", "MISS");
        const originalJson = res.json.bind(res);
        res.json = (data) => {
            cache[key] = {
                value: data,
                createdAt: Date.now()
            };
            return originalJson(data);
        };
        return next();
    }
    res.on("finish", () => {
        if (
            ["POST", "PUT", "PATCH", "DELETE"].includes(req.method) &&
            res.statusCode >= 200 &&
            res.statusCode < 300
        ) {
            Object.keys(cache).forEach((key) => {
                delete cache[key];
            });
        }
    });
    next();
}

module.exports = cacheMiddleware;