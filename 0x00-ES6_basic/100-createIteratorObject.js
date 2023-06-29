export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const key of Object.keys(report.allEmployees)) {
        for (const value of report.allEmployees[key]) {
          yield value;
        }
      }
    }
  };
}

