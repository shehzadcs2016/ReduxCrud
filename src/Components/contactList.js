import React, { Component } from "react";
import {
  StyledTableCell,
  StyledTableRow,
  useStyles
} from "./../Components/Style";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import EditIcon from "@material-ui/icons/Edit";
import { fetchContacts, DeleteContacts } from "./../Actions/index";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

class ContactList extends Component {
  UNSAFE_componentWillMount() {
    this.props.dispatch(fetchContacts());
  }
  deleteContact = id => {
    this.props.dispatch(DeleteContacts(id));
  };

  render() {
    return (
      <div className="container" style={{ marginTop: 20 }}>
        <center>
          <h1>Contact List</h1>
        </center>
        <div style={{ marginBottom: 15 }}></div>
        <Paper className={useStyles.root}>
          <Table className={useStyles.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>name</StyledTableCell>
                <StyledTableCell>phone</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            {this.props.contacts ? (
              <TableBody>
                {this.props.contacts &&
                  this.props.contacts.map(contact => (
                    <StyledTableRow key={contact.id}>
                      <StyledTableCell>{contact.name}</StyledTableCell>
                      <StyledTableCell>{contact.contact}</StyledTableCell>
                      <StyledTableCell>
                        <Link
                          to={`/edit/${contact.id}`}
                          color="secondary"
                          aria-label="edit"
                          className={useStyles.fab}
                        >
                          <EditIcon />
                        </Link>

                        <DeleteIcon
                          onClick={() => this.deleteContact(contact.id)}
                        />
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </TableBody>
            ) : (
              <div>Loading.........</div>
            )}
          </Table>
        </Paper>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    contacts: state.contact
  };
};
export default connect(mapStateToProps)(ContactList);
