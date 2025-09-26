import React from "react";
import "./ReportsLayout.css"

function Reports() {
    return (
        <div className="reports-container">
          <h1>Reports</h1>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Doctor Name</th>
                <th>Doctor Speciality</th>
                <th>View Report</th>
                <th>Download Report</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. John Doe</td>
                <td>Cardiology</td>
                <td>
                  <a href="/frontend_developer_capstone_project/patient_report.pdf" target="_blank" rel="noopener noreferrer">
                    <button>View Report</button>
                  </a>
                </td>
                <td>
                  <a href="/frontend_developer_capstone_project/patient_report.pdf" download>
                    <button>Download Report</button>
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Dr. Jane Smith</td>
                <td>Dermatology</td>
                <td>
                  <a href="/frontend_developer_capstone_project/patient_report.pdf" target="_blank" rel="noopener noreferrer">
                    <button>View Report</button>
                  </a>
                </td>
                <td>
                  <a href="/frontend_developer_capstone_project/patient_report.pdf" download>
                    <button>Download Report</button>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );            
}

export default Reports;