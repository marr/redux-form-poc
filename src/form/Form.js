import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

const renderWidget = (widget, i) => {
  return (
    <div key={i}>
      <Field component="input" name={`${widget}.name`} />
      <Field component="input" type="checkbox" name={`${widget}.selected`} />
    </div>
  )
}

const renderWidgets = ({ fields }) => (
  <div>
    {fields.map(renderWidget)}
    {fields.error && <div className="FieldArray-error">{fields.error}</div>}
  </div>
)

class Form extends Component {

  render() {
    const { handleSubmit, error } = this.props

    console.log(error)
    return (
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form-header">
          <h2>Form with FieldArray</h2>
          {error && <div className="Form-error">{error}</div>}
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
