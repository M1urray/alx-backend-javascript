/* eslint-disable no-unused-vars */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // disable no used vars
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
