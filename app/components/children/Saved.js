var React = require("react");

import SavedArticle from "./SavedArticle";

class Saved extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			updateCounter: 0
		}
		this.refresh = this.refresh.bind(this);
	}

	componentDidUpdate( prevProps, prevState ) {
		if (prevState.updateCounter !== this.state.updateCounter) this.props.refresh();
	};

	refresh() {
		this.setState({ updateCounter: this.state.updateCounter + 1 });
	};

	render() {
		return(
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1">
					<div className="panel panel-default text-center">
						<div className="panel-heading">
							<strong>Saved Articles</strong>
						</div>
						<div className="panel-body">
							{this.props.saved.map(function(savedArticle, i){
								return <SavedArticle savedArticle={savedArticle} key={i} refresh={this.refresh} />
							}.bind(this))}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Saved;