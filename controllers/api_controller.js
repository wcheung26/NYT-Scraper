var Articles = require('../models/Articles');
var express = require('express');
var router = express.Router();

router.get('/saved', function(req, res) {
	Articles.find({}, (err, doc) => {
		console.log("saved:", doc);
		if (err) {
			console.log("Find Articles had an error");
			res.send(err);
		} else {
			console.log("Articles found");
			res.send(doc);
		}
	});
});

router.post('/saved', function(req, res) {
	Articles.create({
		title: req.body.title,
		url: req.body.url
	})
})

router.delete('/saved', function(req, res) {
	
})

module.exports = router;