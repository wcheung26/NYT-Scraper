var React = require("react");
var ReactDOM = require("react-dom")


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		console.log("event");
		// var newState = {};
		// newState.topic = ReactDOM.findDOMNode(this.refs.topic).value;
		// newState.start = ReactDOM.findDOMNode(this.refs.start).value;
		// newState.end = ReactDOM.findDOMNode(this.refs.end).value;
		// console.log(newState)
		// this.setState(newState);
		// this.props.setSearch(this.state);
		// this.setState({
		// 	topic: ReactDOM.findDOMNode(this.refs.topic).value,
		// 	start: ReactDOM.findDOMNode(this.refs.start).value,
		// 	end: ReactDOM.findDOMNode(this.refs.end).value
		// });
		this.props.setSearch(
			ReactDOM.findDOMNode(this.refs.topic).value,
			ReactDOM.findDOMNode(this.refs.start).value,
			ReactDOM.findDOMNode(this.refs.end).value
		);
	}

	render() {
		return(
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1">
					<div className="panel panel-default text-center">
						<div className="panel-heading">
							<strong>Search</strong>
						</div>
						<div className="panel-body">
							<form onSubmit={this.handleSubmit}>
								<div className="form-group">
									<label htmlFor="topic">Topic</label>
									<input type="text" className="form-control" name="topic" ref="topic" />
								</div>
								<div className="form-group">
									<label htmlFor="start">Start Year</label>
									<input type="text" className="form-control" name="start" ref="start" />
								</div>
								<div className="form-group">
									<label htmlFor="end">End Year</label>
									<input type="text" className="form-control" name="end" ref="end" />
								</div>
								<input type="submit" className="btn btn-primary" value="Search" />
							</form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Form;