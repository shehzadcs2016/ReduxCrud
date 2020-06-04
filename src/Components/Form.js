import React from "react"
import { useStyles } from "./Style"
import { Button, TextField } from "@material-ui/core"

class Form extends React.Component {
  state = {
    name: "",
    contact: "",
    email: "",
    message: "",
    location: "",
  }
  componentDidMount() {
    if (this.props.contact) {
      const { name, contact, email, location } = this.props.contact

      this.setState({ name, contact, email, location })
    }
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state)
  }

  render() {
    const { name, contact, email, message, location } = this.state

    return (
      <form>
        <TextField
          name="name"
          type="text"
          id="standard-basic"
          className={useStyles.textField}
          label="Enter Name"
          margin="normal"
          value={name}
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
          value={contact}
          onChange={this.handleChange}
        />
        <TextField
          name="email"
          required
          id="standard-basic"
          type="email"
          className={useStyles.textField}
          label="Enter Email"
          margin="normal"
          style={{ width: "100%" }}
          value={email}
          onChange={this.handleChange}
        />
        <TextField
          name="location"
          required
          id="standard-basic"
          type="text"
          className={useStyles.textField}
          label="Enter location"
          margin="normal"
          style={{ width: "100%" }}
          value={location}
          onChange={this.handleChange}
        />

        <div className="col-md-6 mt-3 ">
          <Button
            size="large"
            fullWidth
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              contact.length === 0 ||
              location.length === 0
            }
            variant="contained"
            color="secondary"
            onClick={this.onSubmit}
          >
            Submit
          </Button>
        </div>
      </form>
    )
  }
}

export default Form
