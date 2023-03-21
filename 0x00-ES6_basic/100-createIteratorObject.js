export default function createIteratorObject(report) {
  let nextIndex = 0;
  return {
    next: () => {
      return nextIndex < Object.keys(report).length ? {
        // value:
        //tbc
      }
    }
  }
}
