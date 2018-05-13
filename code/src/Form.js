import React, { Component } from 'react';

class Form extends Component 
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            messageErrorClass: '',
            formValidate: false
        };

        this.inputMessage = React.createRef();

        this.formValidate = this.formValidate.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    /**
     * @desc NavigationButton component handler: it pass che button value to parent handler.
     * @param {string} value 
     */
    handleButtonClick(event)
    {
        if( event.target.value === 'UncontrolledForm' )
        {
            this.setState({
                formValidate: false
            });
        }
        else
        {
            this.props.onElementClick(event);
        }
    }

    /**
     * @desc Form validator: if the submitted values are correct, this function validate the form.
     * @param {object} event 
     */
    formValidate(event)
    {

        if( this.inputMessage.current.value === '' )
        {
            this.setState({
                messageErrorClass: 'input-error',
                formValidate: false
            });
        }
        else
        {
            this.setState({
                messageErrorClass: '',
                formValidate: true
            });
            debugger;

            this.props.setMessage(this.inputMessage.current.value);
        }

        event.preventDefault();


    }

    render()
    {
        if( this.state.formValidate )
        {
            return (
                <React.Fragment>
                    <p>Form completed successfully</p>
                </React.Fragment>
            );
        }
        else
        {
            return (
                <React.Fragment>
                    <hr />
                    <h4>ADD TODO</h4>
                    <form name="todoForm" onSubmit={this.formValidate}>
                        <p>
                            <label>Message* </label>
                            <input type="text" 
                                name="form"
                                className={this.state.messageErrorClass}
                                ref={this.inputMessage} />
                        </p>
                        <p>
                            <input type="submit" value="SAVE" />
                        </p>
                    </form>
                    
                </React.Fragment>
            );
        }
    }
}

export default Form;