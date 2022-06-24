import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const getTotal = (params) =>
  params.getValue(params.id, "maths") + params.getValue(params.id, "science");

const columns = [
  { field: "maths", headerName: "Maths", width: 330 },
  { field: "science", headerName: "Science", width: 330 },
  {
    field: "Total",
    headerName: "Total marks",
    width: 160,
    valueGetter: getTotal
  }
];

const rows = [
  { id: 1, maths: 7500000003049503948503948530458340958340958, science: 60 },
  { id: 2, maths: 80, science: 70 },
  { id: 3, maths: 50, science: 80 },
  { id: 4, maths: 80, science: 60 },
  { id: 5, maths: 100, science: 90 },
  { id: 6, maths: 100, science: 90 },
  { id: 7, maths: 100, science: 90 },
  { id: 8, maths: 100, science: 90 },
  { id: 9, maths: 100, science: 90 },
  { id: 10, maths: 100, science: 90 },
  { id: 11, maths: 100, science: 90 },
  { id: 12, maths: 100, science: 90 },
  { id: 13, maths: 100, science: 90 },
  { id: 14, maths: 100, science: 90 },
  { id: 15, maths: 100, science: 90 },
  { id: 16, maths: 100, science: 90 },
  { id: 17, maths: 100, science: 90 },
  { id: 18, maths: 100, science: 90 },
  { id: 19, maths: 100, science: 90 },
  { id: 20, maths: 100, science: 90 },
  { id: 21, maths: 75, science: 60 },
  { id: 22, maths: 80, science: 70 },
  { id: 23, maths: 50, science: 80 },
  { id: 24, maths: 80, science: 60 },
  { id: 25, maths: 100, science: 90 },
  { id: 26, maths: 100, science: 90 },
  { id: 27, maths: 100, science: 90 },
  { id: 28, maths: 100, science: 90 },
  { id: 29, maths: 100, science: 90 },
  { id: 210, maths: 100, science: 90 },
  { id: 211, maths: 100, science: 90 },
  { id: 212, maths: 100, science: 90 },
  { id: 213, maths: 100, science: 90 },
  { id: 214, maths: 100, science: 90 },
  { id: 215, maths: 100, science: 90 },
  { id: 216, maths: 100, science: 90 },
  { id: 217, maths: 100, science: 90 },
  { id: 218, maths: 100, science: 90 },
  { id: 219, maths: 100, science: 90 },
  { id: 220, maths: 100, science: 90 },

];

export default function ValueGetterGrid() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid style={{color: "white"}} rows={rows} columns={columns} />
    </div>
  );
}
