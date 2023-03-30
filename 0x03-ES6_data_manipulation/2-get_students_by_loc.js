/**
 * Retrieves students in a given location.
 * @param {{
*   id: Number,
*   firstName: String,
*   location: String
* }[]} students - The list of students.
* @param {String} city - The location.
* @author Robert Kamau <https://github.com/M1urray>
* @returns
*/
export default function getStudentsByLocation(listStudents, city) {
  if (!Array.isArray(listStudents)) {
    return [];
  }
  return listStudents.filter((student) => (student.location === city));
}
