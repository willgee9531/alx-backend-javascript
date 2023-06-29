export default function createIteratorObject(report) {
   let employee = [];
   for (const value of Object.values(Object.values(report.allEmployees))) {
     employee.push(value);
   }
   let finall = [...employee[0], ...employee[1]];
   return finall;
}
