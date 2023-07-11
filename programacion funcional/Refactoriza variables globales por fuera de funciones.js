function add(arr, bookName) {
  const newArr = [...arr, bookName];
  return newArr;
}

function remove(arr, bookName) {
  const bookIndex = arr.indexOf(bookName);
  if (bookIndex >= 0) {
    const newArr = [...arr.slice(0, bookIndex), ...arr.slice(bookIndex + 1)];
    return newArr;
  }
}

const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

const updatedList = add(bookList, "The Great Gatsby");
console.log(updatedList);

const removedList = remove(bookList, "Philosophiæ Naturalis Principia Mathematica");
console.log(removedList);
