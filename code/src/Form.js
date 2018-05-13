import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageErrorClass: '',
            formValidate: false,
            messageSent: false,
            sendError: false
        };
        this.inputMessage = React.createRef();
        this.formValidate = this.formValidate.bind(this);
    }

    /**
     * @desc Form reset: brings form back to initial state.
     */
    formReset() {
        this.setState({
            messageErrorClass: '',
            formValidate: false,
            messageSent: false,
            sendError: false
        });
    }

    /**
     * @desc Form validator: checks form input and.
     * @param {object} event 
     */
    formValidate(event) {
        var wsSuccess;
        if( this.inputMessage.current.value.trim() === '' ) {
            debugger;
            this.setState({
                messageErrorClass: 'mandatory-field-error',
                formValidate: false
            });
        } else {
            this.setState({
                messageErrorClass: '',
                formValidate: true
            });
            wsSuccess = this.props.setMessage(this.inputMessage.current.value);
        }
        if (wsSuccess != undefined) {
            wsSuccess.then(results => {
                this.setState({
                    messageSent: true
                });
            }).catch(error => {
                this.setState({
                    sendError: true
                });
            });    
        }
        event.preventDefault();
    }

    render() {
        if( this.state.formValidate && this.state.messageSent) {
            return (
                <React.Fragment>
                    <div className="thankyou">
                        <p>Todo salvato</p>
                        <p>
                            <br />
                            <input type="submit" value="BACK" autoFocus onClick={this.formReset.bind(this)} />
                        </p>
                    </div>
                </React.Fragment>
            );
        } else if( this.state.formValidate && !this.state.messageSent && !this.state.sendError) {
            return (
                <React.Fragment>
                    <div className="thankyou">
                        <p>Salvataggio in corso</p>
                        <p>
                            <br />
                            <input type="submit" value="BACK" autoFocus onClick={this.formReset.bind(this)} />
                        </p>
                    </div>
                </React.Fragment>
            );
        } else if( this.state.formValidate && !this.state.messageSent && this.state.sendError) {
            return (
                <React.Fragment>
                    <div className="thankyou">
                        <p>Errore di invio - riprova più tardi</p>
                        <p>
                            <br />
                            <input type="submit" value="BACK" autoFocus onClick={this.formReset.bind(this)} />
                        </p>
                    </div>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <form name="todoForm" onSubmit={this.formValidate}>
                        <p>
                            <label>Testo del todo* </label><br /><br />
                            <input
                                type="text" 
                                name="form"
                                className={this.state.messageErrorClass}
                                ref={this.inputMessage}
                                onChange={this.checkinput}
                                autoFocus />
                        </p>
                        <p>
                            <br />
                            <input
                                type="submit"
                                value="Salva" />
                        </p>
                    </form>
                </React.Fragment>
            );
        }
    }

}

export default Form;