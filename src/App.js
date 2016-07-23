import React, { Component } from 'react';
import Form from './form/Form';
import { connect } from 'react-redux';
import { loadData } from './actions/widgets'

import logo from './logo.svg';
import './App.css';

const initialValues = {
  widgets: ['2']
}

class App extends Component {

  componentWillMount() {
    this.props.loadData()
  }

  handleSubmit(values) {
    console.log(values)
  }

  render() {
    const { widgets } = this.props
    console.log(widgets)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Form PoC</h2>
        </div>
        <div className="App-intro">
          <pre className="App-state">
            {JSON.stringify(this.props.form, null, 2)}
          </pre>
          <Form
            initialValues={initialValues}
            onSubmit={this.handleSubmit}
            widgets={this.props.widgets}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ form, widgets }) => {
  return {
    form,
    widgets
  }
}

export default connect(mapStateToProps, { loadData })(App);
