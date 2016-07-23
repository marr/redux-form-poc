import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, FieldArray } from 'redux-form';

const Widget = props => {
  //const widget = input.props.widgets.find(w => w.id === input.value)
  //delete input.widgets
  console.log(props)
  return (
    <label>
      <input type="checkbox" {...props.input} />
    </label>
  )
}

const renderWidget = (fields, widget, i) => {
  return (
    <div key={i}>
      <Field component="input" name={`${widget}.name`} />
      <Field component="input" type="checkbox" name={`${widget}.selected`} />
    </div>
  )
}

const renderWidgets = ({ fields }) => (
  <div>
    {fields.map(renderWidget.bind(null, fields))}
  </div>
)

class Form extends Component {

  render() {
    const { handleSubmit, widgets } = this.props
    return (
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form-header">
          <h2>Form with FieldArray</h2>
        </div>
        <FieldArray component={renderWidgets} name="widgets" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const form = 'widgets';
Form = reduxForm({ form })(Form);

export default Form;
