var React = require("react");

import Article from "./Article";

class Results extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1">
					<div className="panel panel-default text-center">
						<div className="panel-heading">
							<strong>Results</strong>
						</div>
						<div className="panel-body">
							{this.props.results.map(function(article, i){
								return <Article article={article} key={i} />
							})}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Results;