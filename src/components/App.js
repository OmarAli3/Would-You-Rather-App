import { React, Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <Leaderboard />
            </div>
        );
    }
}

export default connect()(App);
