import React from "react";
import PropTypes from "prop-types";

class ModuleCard extends React.Component {
    constructor(props) {
        super(props);
        
    }

    updateActiveModule = () => {
        this.props.setActivedModule(this.props.index);
    }

    render() {
        return (
            <div className="card" onClick={this.updateActiveModule}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.code}</h5>
                </div>
            </div>
        );          
    }
}

ModuleCard.propTypes = {
    code: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired
};

export default ModuleCard;