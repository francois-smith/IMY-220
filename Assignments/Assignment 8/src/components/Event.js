import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-muted">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                    <p className="card-text">{this.props.date}</p>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}
