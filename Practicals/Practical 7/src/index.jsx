import React from "react";
import ReactDOM from "react-dom/client";
import UserList from "./components/UserList.jsx";

let users = [
	{username: "DanielIsCool", name: "Daniel",surname: "Daniels", age: "23"},
	{username: "Username123", name: "Bob",surname: "Dabuilder", age: "25"},
	{username: "NotWilliam", name: "William",surname: "Anderson", age: "24"},
	{username: "IDontNodeWhatImDoing", name: "Tom",surname: "Garfield", age: "24"},
	{username: "BillieEyelash", name: "Michael",surname: "Scarn", age: "27"},
	{username: "MomsSpaghetti", name: "Marshall",surname: "Matters", age: "49"},
	{username: "Hugo", name: "Glen",surname: "Coco", age: "17"}
];

class App extends React.Component{
    render(){
        return (
            <UserList users={users} />
        );
    }
}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);