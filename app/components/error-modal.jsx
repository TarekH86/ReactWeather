import React, { Component, PropTypes } from 'react';

class ErrorModal extends Component {
 static defaultProps = {
         title: 'Error'
 }
   
   static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string.isRequired
    }
    componentDidMount(){
        const modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    render(){
        const { title, message } = this.props;
        return (
            <div>
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
            <h4>{title}</h4>
            <p> {message}</p>
            <p>
                <button className="button hollow" data-close="">
                    Okay
                </button>
            </p>
            </div>
            </div>
        );
    }
}

export default ErrorModal;