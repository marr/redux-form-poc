import React, { Component } from 'react';
import Form from './form/Form';
import { connect } from 'react-redux';
import { loadData } from './actions/widgets';
import { formValueSelector } from 'redux-form';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentWillMount() {
    this.props.loadData()
  }

  //componentDidUpdate(prevProps) {
    //console.log(prevProps, this.props)
  //}

  handleSubmit(values) {
    console.log(values)
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
            onSubmit={this.handleSubmit}
          />
        </div>
      </div>
    );
  }
}
const selector = formValueSelector('widgets');

const selectedWidgets = ["2"]
const mapStateToProps = state => {
  const formWidgets = selector(state, 'widgets');
  return {
    form: state.form,
    widgets: state.widgets.map(widget => {
      widget.selected = selectedWidgets.includes(widget.id)
      return widget
    })
  }
}

export default connect(mapStateToProps, { loadData })(App);
