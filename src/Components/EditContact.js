import React, { Component } from "react";
import Form from "./Form";
import { EditContacts, fetchContact } from "./../Actions/index";
import { connect } from "react-redux";

class EditForm extends Component {
  UNSAFE_componentWillMount() {
    this.props.fetchContact(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.EditContacts(formValues, this.props.match.params.id);
    this.props.history.push("/");
  };
  render() {
    const data = this.props.contacts[this.props.match.params.id - 1];
    if (this.props.contacts.length) {
      return <Form contact={data} onSubmit={this.onSubmit} />;
    }

    return <div>loading.....</div>;
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.contact
  };
};
export default connect(mapStateToProps, { EditContacts, fetchContact })(
  EditForm
);
