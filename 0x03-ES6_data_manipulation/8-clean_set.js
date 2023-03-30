/**
 * Joins a set of strings with a dash after stripping the strings of
 * a leading sub string.
 * @param {Set<String>} set - A collection of strings.
 * @param {String} startString - The string to strip from the beginning
 * of each item in the set.
 * @returns {String}
 */
const cleanSet = (set, string) => {
  if (!string || !string.length) return '';
  let value = '';
  for (const el of set) {
    if (el && el.startsWith(string)) {
      value += value.length === 0 ? el.replace(string, '') : el.replace(string, '-');
    }
  }
  return value;
};

export default cleanSet;
