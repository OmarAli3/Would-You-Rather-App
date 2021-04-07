import { React, Component } from "react";
import { connect } from "react-redux";
import { formatUsers } from "../utils/helpers";
import Leader from "./Leader";

class Leaderboard extends Component {
    render() {
        const prize = {
            0: "gold",
            1: "silver",
            2: "bronze",
        };
        return (
            <div className="dashboard leaderboard ">
                {this.props.users.map((user, idx) => (
                    <Leader prize={prize[idx]} key={user.id} {...user} />
                ))}
            </div>
        );
    }
}

const mapStatetToProps = ({ users }) => ({
    users: formatUsers(users).sort((a, b) => b.score - a.score),
});
export default connect(mapStatetToProps)(Leaderboard);
