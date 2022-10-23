import React from "react";
import ReactDOM from "react-dom/client";
import EnrolmentList from "./components/EnrolmentList.js";

class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <EnrolmentList/>
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);