export default function search(searchObjects, searchBy, searchString) {
  if (searchObjects.length && searchBy.length && searchString.length) {
    let filtered = searchObjects.filter((searchObject) => {
      let found = 0;
      searchBy.forEach((searchTerm) => {
        if (
          searchObject[searchTerm]
            .toLowerCase()
            .indexOf(searchString.toLowerCase()) !== -1
        ) {
          found++;
        }
      });
      if (found) return true;
      return false;
    });
    return filtered;
  }
  return searchObjects;
}
