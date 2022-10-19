import React from "react";
import PropTypes from "prop-types";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: false,
        };
    }

    toggleView = () => {
        this.setState({view: !this.state.view});
    }

    render(){
        return (
            <div className="card">
                <div className="card-header" onClick={this.toggleView}>
                    {this.props.user.username}
                </div>
                {this.state.view ? 
                <div className="card-body">
                    <p>
                        <b>Name:</b> {this.props.user.name}
                    </p>
                    <p>
                        <b>Surname:</b> {this.props.user.surname}
                    </p>
                    <p>
                        <b>Age:</b> {this.props.user.age}
                    </p>
                </div>
                : null}
            </div>
        );
    }
}

User.propTypes = {
    user: PropTypes.object,
};

export default User;