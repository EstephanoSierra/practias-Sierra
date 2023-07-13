function whatIsInAName(collection, source) {
 const keys = Object.keys(source);

  const filteredArr = collection.filter((obj) => {
    for (let i = 0; i < keys.length; i++) {
      if (!obj.hasOwnProperty(keys[i]) || obj[keys[i]] !== source[keys[i]]) {
        return false;
      }
    }
    return true;
  });

  return filteredArr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });