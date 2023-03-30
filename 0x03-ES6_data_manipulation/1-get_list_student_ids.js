/**
 * Retrieves ids from a list of students.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @author Robert Kamau <https://github.com/M1urray>
* @returns
*/
const getListStudentIds = (listOfStudents) => (listOfStudents && Array.isArray(listOfStudents)
  ? listOfStudents.map((item) => item.id) : []);
export default getListStudentIds;
