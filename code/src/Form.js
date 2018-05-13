import React, { Component } from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messageErrorClass: '',
            formValidate: false
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
            formValidate: false
        });
    }

    /**
     * @desc Form validator: checks form input and.
     * @param {object} event 
     */
    formValidate(event) {
        if( this.inputMessage.current.value === '' ) {
            this.setState({
                messageErrorClass: 'mandatory-field-error',
                formValidate: false
            });
        } else {
            this.setState({
                messageErrorClass: '',
                formValidate: true
            });
            this.props.setMessage(this.inputMessage.current.value);
        }
        event.preventDefault();
    }

    render() {
        if( this.state.formValidate ) {
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