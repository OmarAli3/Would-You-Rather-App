import { React } from "react";
import { Link } from "react-router-dom";
import { ImSad } from "react-icons/im";

const NotFound = (props) => {
    return (
        <div className="dashboard leaderboard not-found">
            <h1>404</h1>
            <ImSad className="not-found-icon" />
            <h1>Page Not Found</h1>
            <p>
                The page you are looking for doesn't exist or other error
                occurred.
            </p>
            <p>
                Click <Link to="/">here</Link> to go home
            </p>
        </div>
    );
};

export default NotFound;
