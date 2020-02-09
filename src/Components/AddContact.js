import React, { Component } from "react";
import Form from "./Form";
import { createContacts } from "./../Actions/index";
import { connect } from "react-redux";

class AddContact extends Component {
  onSubmit = formValues => {
    createContacts(formValues);
    this.props.history.push("/");
  };
  render() {
    return <Form onSubmit={this.onSubmit} />;
  }
}

export default connect(null, { createContacts })(AddContact);
