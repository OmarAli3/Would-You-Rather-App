import { React, Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <QuestionPage
                    match={{ params: { id: "am8ehyc8byjqgar0jgpub9" } }}
                />
            </div>
        );
    }
}

export default connect()(App);
