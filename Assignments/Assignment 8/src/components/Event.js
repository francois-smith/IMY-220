import React from 'react'
import PropTypes from 'prop-types'

class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.event.name}
                </div>
                <div className="card-body">
                    <p className="card-text">{this.props.event.description}</p>
                    <p className="card-text">{this.props.event.date}</p>
                </div>
            </div>
        );
    }
}

Event.propTypes = {
    event: PropTypes.object.isRequired
}

export default Event