import React from "react";

function Reports() {
  const reports = [
    { id: 1, name: "Dr. Waqas Khan", speciality: "Cardiology" },
    { id: 2, name: "Dr. Zaryab Khan", speciality: "Dermatology" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports</h1>

      <div className="overflow-x-auto w-full max-w-5xl bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Serial Number</th>
              <th className="px-4 py-3 text-left">Doctor Name</th>
              <th className="px-4 py-3 text-left">Doctor Speciality</th>
              <th className="px-4 py-3 text-center">View Report</th>
              <th className="px-4 py-3 text-center">Download Report</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={report.id}
                className="border-b hover:bg-blue-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3 font-medium text-gray-800">
                  {report.name}
                </td>
                <td className="px-4 py-3">{report.speciality}</td>
                <td className="px-4 py-3 text-center">
                  <a
                    href="/patient_report.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition">
                      View Report
                    </button>
                  </a>
                </td>
                <td className="px-4 py-3 text-center">
                  <a href="/patient_report.pdf" download>
                    <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition">
                      Download Report
                    </button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Reports;
