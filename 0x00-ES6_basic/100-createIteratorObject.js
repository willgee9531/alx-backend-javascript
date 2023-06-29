export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]: function* () {
      for (const values of Object.values(report.allEmployees)) {
        for (const value of values) {
          yield value;
        }
      }
    }
  };
}

