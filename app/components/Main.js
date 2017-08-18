// Include React
var React = require("react");

import Form from "./children/Form";
import Results from "./children/Results";
import Saved from "./children/Saved";

import helpers from "./util/helpers";

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			topic: "",
			start: "",
			end: "",
			results: [],
			saved: [],
			updateCounter: 0
		}
		this.setSearch = this.setSearch.bind(this);
		this.refresh = this.refresh.bind(this);
	}

  // The moment the page renders get the saved articles
  componentDidMount() {
    // Get the latest history.
    console.log("componentDidMount");
    helpers.getSaved().then((response) => {
    	console.log("getSaved:", response)
    	this.setState({ saved: response.data });
  	});
  };

	componentDidUpdate( prevProps, prevState ) {
		if ( 
			prevState.topic !== this.state.topic ||
			prevState.start !== this.state.start ||
			prevState.end !== this.state.end 
			) {
			console.log("-- New search --");

			helpers.runQuery( this.state.topic, this.state.start, this.state.end ).then((data) => {
				if (data !== this.state.results ) {
					console.log("-- Data -- \n", data);
					this.setState({ results: data });
				}
			});
		}
    console.log("componentDidUpdate");
    if (prevState.updateCounter !== this.state.updateCounter) {
	    helpers.getSaved().then((response) => {
	    	console.log("getSaved:", response)
	  		if (prevState.saved !== response.data) {
	    		this.setState({ saved: response.data });
	  		}
	    });
    }
	};

	refresh() {
		this.setState({ updateCounter: this.state.updateCounter + 1 });
	};

	setSearch( topic, start, end ) {
		this.setState({
			topic: topic,
			start: start,
			end: end
		});
	};

	render() {
		return (
			<div>
				<Form setSearch={this.setSearch} />
				<Results results={this.state.results} refresh={this.refresh} />
				<Saved saved={this.state.saved} refresh={this.refresh} />
			</div>
		)
	}
}

export default Main;