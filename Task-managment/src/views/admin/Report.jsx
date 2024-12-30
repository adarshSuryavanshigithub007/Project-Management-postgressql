import React from "react";

const Report = () => {
  const exportToExcel = () => {
    // Get table element
    const table = document.getElementById("dataTable");

    // Convert table to workbook
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Sheet1" });

    // Export the workbook to Excel
    XLSX.writeFile(workbook, "TableData.xlsx");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Responsive Bootstrap Table</h2>
      <div className="table-responsive">
        <table
          id="dataTable"
          className="table table-striped table-hover table-bordered align-middle"
        >
          <thead className="table-dark">
            <tr>
              <th>Project Id</th>
              <th>Pro.Assign Name</th>
              <th>Assign project Name</th>
              <th>Status</th>
              <th>Due date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>johndoe@example.com</td>
              <td>progress</td>
              <td>10/12/2025</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-end">
                <button className="btn btn-success">Export to Excel</button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Report;
