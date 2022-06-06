import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import utils from "../../../../../utils";

import LabelIcon from "@mui/icons-material/Label";

const rand = (max) => {
    return Math.floor(Math.random() * max);
  };

function createData(name, hours, cost, label) {
  return { name, hours, cost, label };
}

const rows = [
  createData("OT x 1.0", rand(500), rand(1000000), "ot1"),
  createData("OT x 1.5", rand(500), rand(1000000), "ot15"),
  createData("OT x 2.0", rand(500), rand(1000000), "ot2"),
  createData("OT x 3.0", rand(500), rand(1000000), "ot3"),
];

const StyledTable = styled(Table)({
  minWidth: "350px",
  backgroundColor: "#212b36",
  marginTop: 24,
  "& .MuiTableCell-root": {
    color: "#ffffff",
  },
  "& .cellType": {
    width: 100,
  },
  "& .cellHours": {
    width: 100,
  },
  "& .cellCost": {
    width: 100,
  },
  "& .MuiSvgIcon-root": {
    marginRight: 4,
  },
  "& .ot1": {
    color: "#3ea0fc",
  },
  "& .ot15": {
    color: "#51e7a6",
  },
  "& .ot2": {
    color: "#febc4a",
  },
  "& .ot3": {
    color: "#ff6378",
  },
});

export default function TableChartOTType() {
  return (
    <TableContainer>
      <StyledTable size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell className={`cellType`}></TableCell>
            <TableCell className={`cellHours`}>ชั่วโมง</TableCell>
            <TableCell className={`cellCost`}>ค่าใช้จ่าย (บาท)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell scope="row" className={`cellType`}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <LabelIcon className={row.label} />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className={`cellHours`}>{utils.numberWithCommas(row.hours)}</TableCell>
              <TableCell className={`cellCost`}>{utils.numberWithCommas(row.cost)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </StyledTable>
    </TableContainer>
  );
}
