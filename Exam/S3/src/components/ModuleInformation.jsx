import React from "react";
import PropTypes from "prop-types";

class ModuleInformation extends React.Component {
    constructor(props) {
        super(props);
    }

    calculateResult = () => {
        if(this.props.module.mark >= 75){
            return "Distinction";
        } 
        else if(this.props.module.mark >= 50 && this.props.module.mark < 75){
            return "Pass";
        } 
        else{
            return "Fail";
        }
    }
        

    render() {
        return (
            <div className="ps-4">
                <h3>Module code: {this.props.module.code}</h3>
                <h4>Department: {this.props.module.department}</h4>
                <h4>Result: {this.calculateResult()}</h4>
            </div>
        );          
    }
}

ModuleInformation.propTypes = {
    module: PropTypes.object.isRequired
};

export default ModuleInformation;