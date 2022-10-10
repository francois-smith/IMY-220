class UsernamePasswordInput extends React.Component{
    checkUsername = (event) => {
        let username = event.target.value;
        if(username.length < 2 || !username.match(/^[A-Z][a-z]+$/)){
            this.props.validateUsername(false);
        }
        else{
            this.props.validateUsername(true);
        }
    }

    checkPass = (event) => {
        let password = event.target.value;
        /*
            must be at least 8 characters long
• must contain at least one capital letter
• must contain at least one digit.
        */
        if(password.length < 8 || !password.match(/[A-Z]/) || !password.match(/[0-9]/)){
            this.props.validatePassword(false);
        }
        else{
            this.props.validatePassword(true);
        }
    }

    render(){
        return(
            <div className="mb-2 row">
                <div className="col-6">
                    <input type="text" placeholder="Username" className="w-100" name="username" onChange={this.checkUsername}/>
                </div>
                <div className="col-6">
                    <input type="text" className="w-100" placeholder="Password" name="password" onChange={this.checkPass}/>
                </div>
            </div>
        );
    }
}

class LoginForm extends React.Component{
    constructor(){
        super();
        this.state = {
            username: false,
            password: false,
            disabled: true,
        };
    }

    validatePassword = (flag) => {
        this.setState({password: flag}, () => this.enableButton());
    }

    validateUsername = (flag) => {
        this.setState({username: flag}, () => this.enableButton());
    }

    enableButton = () => {
        this.setState({disabled: !(this.state.username && this.state.password)});
    }

    render(){
        return(
            <div className="input-group d-flex flex-column w-50">
                <UsernamePasswordInput validatePassword={this.validatePassword} validateUsername={this.validateUsername}/>
                <button className="btn btn-primary" disabled={this.state.disabled} onClick={this.props.logIn}>Submit</button>
            </div>
        );
    }
    
}

class ProfilePage extends React.Component{
    render(){
        return(
            <div>
                <h1>Hi, welcome back {this.props.username}</h1>
                <button className="btn btn-primary" onClick={this.props.logOut}>Log Out</button>
            </div>
        );
    }
}

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            username: "",
            loggedIn: false,
        };
    }

    login = () => {
        let username = document.getElementsByName("username")[0].value;
        console.log(username);
        this.setState({username: username, loggedIn: true});
        this.setState({loggedIn: true});
    }

    render(){
        return(
            <div className="p-3">
                {this.state.loggedIn ?
                <ProfilePage username={this.state.username} logOut={() => this.setState({loggedIn: false})}/> : 
                <LoginForm logIn={this.login}/>}
            </div>
        );
    }
}

//React 18 new way to use react DOM to render to html
const container = document.getElementById('react-container');
const root = ReactDOM.createRoot(container);
root.render(<App/>);


