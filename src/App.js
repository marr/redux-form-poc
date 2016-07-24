import React, { Component } from 'react';
import Form from './form/Form';
import { connect } from 'react-redux';
import { loadData } from './actions/widgets';
import { SubmissionError } from 'redux-form';
import logo from './logo.svg';
import './App.css';

const selectedWidgets = ["2"]

class App extends Component {

  componentWillMount() {
    this.props.loadData()
  }

  handleSubmit(values) {
    const widgets = values.widgets.map(widget => {
      if (widget.selected) {
        return widget.id
      }
      return ''
    }).filter(widget => widget)

    const shouldFail = Math.random() >= 0.5
    if (shouldFail) {
      console.log('should fail')
      const error = new SubmissionError({
        widgets: {
          _error: 'Widget problem',
        },
        _error: 'Form error'
      })
      return Promise.reject(error)
    }

    console.log(widgets)
  }

  render() {
    const { widgets } = this.props
    const initialValues = { widgets }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Form PoC</h2>
        </div>
        <div className="App-intro">
          <pre className="App-state">
          form:
            {JSON.stringify(this.props.form, null, 2)}
          <br />
          widgets:
            {JSON.stringify(this.props.widgets, null, 2)}
          </pre>
          <Form
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={this.handleSubmit}          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    form: state.form,
    widgets: state.widgets.map(widget => {
      widget.selected = selectedWidgets.includes(widget.id)
      return widget
    })
  }
}

export default connect(mapStateToProps, { loadData })(App);
