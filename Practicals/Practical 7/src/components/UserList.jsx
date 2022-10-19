import React from "react";
import User from "./User.jsx";
import PropTypes from "prop-types";

class UserList extends React.Component{
    render(){
        return (
            <div className="container pt-5">
                <div className="row">
                    {this.props.users.map((user) => {
                        return (
                            <div className="col-6">
                                <User user={user} />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

UserList.propTypes = {
    users: PropTypes.array,
};

export default UserList;
