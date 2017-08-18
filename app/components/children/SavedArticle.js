var React = require("react");
var moment = require("moment");

import helpers from "../util/helpers";

class SavedArticle extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		e.preventDefault();
		console.log("Button clicked! \n", this);
		// console.log("Title clicked:", this.props.savedArticle.headline.main);
		// console.log("URL clicked:", this.props.savedArticle.web_url);
		helpers.deleteSaved(this.props.savedArticle._id);
		this.props.refresh();
	}

	render() {
		return(
			<div className="articleBox">
				<div className="row">
					<div className="col-md-10 article">
						<h5>
							<a href={this.props.savedArticle.url}> 
								{this.props.savedArticle.title}
							</a>
							<span className="published">
								<small>
									Saved on {moment(this.props.savedArticle.date).format("dddd, MMMM Do YYYY")}
								</small>
							</span>
						</h5>
					</div>
					<div className="col-md-2">					
						<button 
							onClick={this.handleClick} 
							data-title={this.props.savedArticle.title} 
							data-url={this.props.savedArticle.url} 
							className="btn btn-default">Remove
						</button>
					</div>
				</div>
			</div>
		)
	}
}

export default SavedArticle;