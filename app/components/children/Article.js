var React = require("react");
var moment = require("moment");

import helpers from "../util/helpers";

class Article extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		console.log("Button clicked! \n", this);
		console.log("Title clicked:", this.props.article.headline.main);
		console.log("URL clicked:", this.props.article.web_url);
		helpers.postSaved(this.props.article.headline.main, this.props.article.web_url);
		this.props.refresh();
	}

	render() {
		return(
			<div className="articleBox">
				<div className="row">
					<div className="col-md-10 article">
						<h5>
							<a href={this.props.article.web_url}> 
								{this.props.article.headline.main}
							</a>
							<span className="published">
								<small>
									Published on {moment(this.props.article.pub_date).format("dddd, MMMM Do YYYY")}
								</small>
							</span>
						</h5>
					</div>
					<div className="col-md-2">
						<button 
							onClick={this.handleClick} 
							data-title={this.props.article.headline.main} 
							data-url={this.props.article.web_url} 
							className="btn btn-default">Save
						</button>						
					</div>
				</div>
			</div>
		)
	}
}

export default Article;