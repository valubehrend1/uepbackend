const express = require('express');

const indexRouter = express.Router();
//app.use([path], callback [,callback...])


indexRouter.use((req,res,next) => {
    res.send("<div>Home</div>")
});

module.exports = indexRouter;