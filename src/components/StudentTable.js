import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LinearProgress from "@material-ui/core/LinearProgress";

export default function({ students, check }) {
  return (
    <Paper
      style={{
        display: "block",
        width: "70%",
        margin: "auto",
        marginTop: "3%"
      }}
    >
      <Table style={{ width: "100%", backgroundColor: "#36393f" }}>
        <TableHead>
          <TableRow>
            <TableCell
              style={{
                color: "#8369C4",
                fontWeight: "700",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Number
            </TableCell>
            <TableCell
              style={{
                color: "#8369C4",
                fontWeight: "700",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Student ID
            </TableCell>
            <TableCell
              style={{
                color: "#8369C4",
                fontWeight: "700",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Student Name
            </TableCell>
            <TableCell
              style={{
                color: "#8369C4",
                fontWeight: "700",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Grade
            </TableCell>
            <TableCell
              style={{
                color: "#8369C4",
                fontWeight: "700",
                fontSize: "18px",
                textAlign: "center"
              }}
            >
              Check
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((row, i) => (
            <TableRow key={row._id || i}>
              {row.loading ? (
                <TableCell
                  style={{
                    color: "#fff",
                    width: "8%",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "700"
                  }}
                  component="th"
                  scope="row"
                  colSpan={5}
                >
                  <LinearProgress />
                </TableCell>
              ) : (
                <>
                  <TableCell
                    style={{
                      color: "#fff",
                      width: "8%",
                      textAlign: "center",
                      fontSize: "16px",
                      fontWeight: "700"
                    }}
                    component="th"
                    scope="row"
                  >
                    {i + 1}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fff",
                      width: "20%",
                      // width: "100px",
                      fontSize: "15px",
                      fontWeight: "700",
                      textAlign: "center"
                    }}
                    component="th"
                    scope="row"
                  >
                    {row._id}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fff",
                      width: "30%",
                      fontSize: "15px",
                      fontWeight: "700",
                      textAlign: "center"
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fff",
                      width: "15%",
                      fontSize: "15px",
                      fontWeight: "700",
                      textAlign: "center"
                    }}
                    component="th"
                    scope="row"
                  >
                    {row.grade}
                  </TableCell>
                  <TableCell
                    style={{
                      color: "#fff",
                      width: "15%",
                      fontSize: "15px",
                      fontWeight: "700",
                      textAlign: "center"
                    }}
                    component="th"
                    scope="row"
                  >
                    <Button
                      variant="contained"
                      style={{ backgroundColor: "#8369C4", color: "#fff" }}
                      onClick={() => check(i)}
                    >
                      Check
                    </Button>
                  </TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
