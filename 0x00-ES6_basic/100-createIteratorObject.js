export default function createIteratorObject(report) {
  let employee = [];
  for (const key of Object.keys(report.allEmployees)) {
    for (const value of report.allEmployees[key]) {
      employee.push(value);
    }
  }
  return employee;
}
