var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	title: {
		type: String,
		require: true,
		index: {
			unique: true
		}
	},
	date: {
		type: Date,
		default: Date.now,
		require: true,
	},
	url: {
		type: String,
		require: true
	}
});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;