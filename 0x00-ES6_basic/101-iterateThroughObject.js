export default function iterateThroughObject(reportWithIterator) {
  let seperated = '', i = 0;
  for (const str of reportWithIterator) {
    if (i == reportWithIterator.length - 1) {
      seperated += str;
    }
    else {
      seperated += str + ' | ';
    }
    i++;
  }
  return seperated;
}
