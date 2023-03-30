/**
 * Updates the grades of a list of students in a given city.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {*} city - The city of students.
* @param {{
*   studentId: Number,
*   grade: Number,
* }[]} newGrades - The new grades to be given to a student.
* @author Robert Kamau <https://github.com/M1urray>
* @returns {{id: Number, firstName: String, location: String}[]}
*/
const updateStudentGradeByCity = (students, city, newGrade) => students
  .filter((student) => student.location === city)
  .map((item) => {
    const newRecord = { ...item };

    const newStudent = newGrade.find((student) => student.studentId === item.id);
    if (newStudent) newRecord.grade = newStudent.grade;
    else newRecord.grade = 'N/A';
    return newRecord;
  });

export default updateStudentGradeByCity;
