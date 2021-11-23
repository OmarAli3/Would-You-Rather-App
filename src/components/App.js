import { React, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Leaderboard from "./Leaderboard";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import LoadingBar from "react-redux-loading-bar";
import LoginPage from "./LoginPage";
import NotFound from "./NotFound";

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData());
    }
    render() {
        return (
            <BrowserRouter basename="/Would-You-Rather-App/">
                <div className="App">
                    <LoadingBar />
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Dashboard} />
                        <Route path="/leaderboard" component={Leaderboard} />
                        <Route path="/add" component={NewQuestion} />
                        <Route path="/question/:id" component={QuestionPage} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
