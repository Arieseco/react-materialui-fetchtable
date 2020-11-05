import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Jsonをフェッチしてテーブルに変換、表示する
class BasicTable extends Component {
  constructor(props) {
    super(props);
    //Jsonデータ
    this.state = {
      persons: []
    };
  }

  //Jsonデータを取得する。
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => this.setState({ persons: json }))
      .catch((err) => console.log(err));
  }

  //取得したJsonデータをテーブル表示用に変換、表示する。
  render() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="left">name</TableCell>
              <TableCell align="left">username</TableCell>
              <TableCell align="left">email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.persons.map((person) => (
              <TableRow key={person.id}>
                <TableCell component="th" scope="row">
                  {person.id}
                </TableCell>
                <TableCell align="left">{person.name}</TableCell>
                <TableCell align="left">{person.username}</TableCell>
                <TableCell align="left">{person.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default BasicTable;
