import React from "react";

function StudentDetails() {
  const student = {
    name: "Rahul Jangir",
    Usn: "1by25mc079",
    department: "Master of Computer Applications",
    college: "BMS Institute of Technology and Management ",
    email: "25pg1bymc107@bmsit.com",
    phone: "+91 9876543210",
    cgpa: "8.0",
  };

  return (
    <div className="card">
      <h2>👤 Student Details</h2>

      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Usn:</strong> {student.Usn}</p>
      <p><strong>Department:</strong> {student.department}</p>
      <p><strong>College:</strong> {student.college}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
      <p><strong>CGPA:</strong> {student.cgpa}</p>
    </div>
  );
}

export default StudentDetails;