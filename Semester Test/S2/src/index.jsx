import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import QuestionList from "./components/QuestionList.jsx";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3000";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: []
        };
    }

    componentDidMount() {
        const socket = socketIOClient(ENDPOINT);
        socket.on("questions", data => {
            this.setState({ questions: data });
        });
    }

    render() {
        return (
            <div>
                <QuestionList questions={this.state.questions} />
            </div>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
