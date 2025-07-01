const students = [
  { name: "Alice", marks: 87 },
  { name: "Bob", marks: 45 },
  { name: "Charlie", marks: 72 },
  { name: "David", marks: 95 },
  { name: "Elina ", marks: 68 }
];

function getGrade(marks) {
  if (marks > 90) return "A";
  else if (marks >= 76) return "B";
  else if (marks >= 51) return "C";
  else return "Fail";
}

const tableBody = document.getElementById("student-table-body");

students.forEach(student => {
  const grade = getGrade(student.marks);
  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.marks}</td>
    <td>${grade}</td>
  `;

  tableBody.appendChild(row);
});
