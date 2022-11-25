import React from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIOClient(ENDPOINT);

class EnrolmentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classes: []
        };
    }

    componentDidMount() {
        socket.on("classes", data => {
            this.setState({ classes: data });
        });
    }

    handleClick = (event) => {
        socket.emit("getUsers", event.target.dataset.code);
    }

    render() {
        return (
            <div className="container pt-5">
                <h1>Select a class</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Show 7 classes: 
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.state.classes.map((c, i) => {
                            return (
                                <a key={i} className="dropdown-item" data-code={c.code} onClick={e => this.handleClick(e)} href="#">{c.name}</a>
                            );
                        })}
                    </div>
                </div>
            </div>
        );          
    }
}

export default EnrolmentList;