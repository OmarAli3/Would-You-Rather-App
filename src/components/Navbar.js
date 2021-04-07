import { React, Component } from "react";

class Navbar extends Component {
    render() {
        return (
            <nav className="nav">
                <ul>
                    <li>Home</li>
                    <li>New Question</li>
                    <li>Leader Board</li>
                    <li>UserName</li>
                    <li>avatar</li>
                    <li>logout</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
