// 404 routes
const notFound = (req, res, next) => {
    const error = new Error(`Not Found 🦊 - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

// Error handling middleware
const errorHandler = (error, req, res, next) => {
    if (res.headersSent) { return next(error); }
    
    res.status(res.code || 500).json({message : error.message || "Unknown error occured 🦊"});
};


module.exports = { notFound, errorHandler };