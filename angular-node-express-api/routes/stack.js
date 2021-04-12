var express = require('express');
var router = express.Router();
const StackService = require('../services/stack');
var stack = new StackService();

router.get('/pop', function(req, res, next) {
    res.json({
        poppedInteger: stack.pop(),
        sizeOfStack: stack.length()
    });
});
router.get('/size', function(req, res, next) {
    res.json({
        sizeOfStack: stack.length()
    });
});
router.post('/push', async(req, res, next) => {
    var pushedInteger = req.body.number;
    try {
        stack.push(pushedInteger);
        var size = stack.length();
        return res.status(201).json({
            addedToStack: pushedInteger,
            sizeOfStack: size
        });
    } catch (err) {
        if (err.name === 'ValidationError') {
            return res.status(400).json({ error: err.message });
        }
        // unexpected error
        return next(err);
    }
})

module.exports = router;