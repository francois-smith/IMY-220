class UsernamePasswordInput extends React.Component{
    constructor(props){
        super(props);
    
        this.state = {
            username: "",
            password: ""
        };
    }

    checkUsername = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    checkPass = (event) => {
        this.setState({
            password: event.target.value
        });

        this.validatePass();
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.username} onChange={this.checkUsername}/>
                <input type="text" value={this.state.password} onChange={this.checkPass}/>
            </div>
        );
    }
}

ReactDOM.render(
    <UsernamePasswordInput validatePass={someFunctionHere}
    validateUsername={someFunctionHere}/>,
    document.getElementById("react-container")
);