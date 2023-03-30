/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Robert Kamau <https://github.com/M1urray>
* @returns {Number}
*/
const getStudentIdsSum = (list) => list.reduce((total, student) => total + student.id, 0);

export default getStudentIdsSum;
