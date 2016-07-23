import React, { Component } from 'react';
import { reduxForm, Field, FieldArray } from 'redux-form';

const Widget = ({ input }) => {
  //const widget = input.props.widgets.find(w => w.id === input.value)
  //delete input.widgets
  return (
    <label>
      Widget #{/*widget.name*/}
      <input type="checkbox" {...input} defaultChecked />
    </label>
  )
}

const renderWidget = (fields, name, i) => {
  return (
    <div key={i}>
      <Field component={Widget} name={name} onClick={() => {
        fields.remove(i)
      }}  />
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
    console.log(widgets)
    return (
      <form className="Form" onSubmit={handleSubmit}>
        <div className="Form-header">
          <h2>Form with FieldArray</h2>
        </div>
        <FieldArray component={renderWidgets}
          name="widgets" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

const form = 'widgets';
export default reduxForm({ form })(Form);

