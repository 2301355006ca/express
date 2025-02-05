varexpress= require('express');
varrouter= express.Router();


router.get('/', function(req, res, next) {
res.render('hello', {title: 'Hello Express'});
});

module.exports= router;