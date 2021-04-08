import { React, Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./LoginPage";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <div className="App">
                <LoadingBar style={{ backgroundColor: "blue" }} />
                <LoginPage />
                {/*<Navbar />*/}
            </div>
        );
    }
}

export default connect()(App);
