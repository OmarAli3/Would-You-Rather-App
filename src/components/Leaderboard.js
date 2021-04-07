import { React, Component } from "react";
import { connect } from "react-redux";
import { formatUsers } from "../utils/helpers";

class Leaderboard extends Component {
    componentDidMount(){
        console.log(this.props.users)
    }
    render() {
        return <div className="dashboard">leaderboard</div>;
    }
}

const mapStatetToProps = ({ users }) => (console.log(users),{
    users: formatUsers(users).sort((a, b) => b.score - a.score),
});
export default connect(mapStatetToProps)(Leaderboard);
