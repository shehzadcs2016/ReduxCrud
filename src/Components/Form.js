import React from "react";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Style";

class Form extends React.Component {
  state = {
    name: "",
    contact: ""
  };
  componentDidMount() {
    if (this.props.contact) {
      const { name, contact } = this.props.contact;
      this.setState({ name, contact });
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form>
        <TextField
          name="name"
          type="text"
          id="standard-basic"
          className={useStyles.textField}
          label="Enter Name"
          margin="normal"
          value={this.state.name}
          onChange={this.handleChange}
          style={{ width: "100%" }}
        />
        <TextField
          name="contact"
          id="standard-basic"
          type="text"
          className={useStyles.textField}
          label="Enter Contact"
          margin="normal"
          style={{ width: "100%" }}
          value={this.state.contact}
          onChange={this.handleChange}
        />
        <button onClick={this.onSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
