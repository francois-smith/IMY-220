import React from "react";
import ReactDOM from "react-dom/client";
import AcademicRecord from "./components/AcademicRecord.jsx";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";
const socket = socketIOClient(ENDPOINT);

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            record: {}
        };
    }

    componentDidMount() {
        socket.on("getRecord", data => {
            this.setState({ record: data[0]});
        });
    }

    render(){
        return (
            <AcademicRecord record={this.state.record} />
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);