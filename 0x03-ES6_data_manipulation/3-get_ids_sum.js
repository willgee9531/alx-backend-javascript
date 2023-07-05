const getStudentIdsSum = (studentsList) => studentsList.reduce((acc, list) => acc + list.id, 0);

export default getStudentIdsSum;
