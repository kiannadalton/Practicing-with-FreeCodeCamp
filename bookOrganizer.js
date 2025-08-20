// My Code:
let books = [
  { title: "A Piece of Cake", authorName: "Cupcake Brown", releaseYear: 2006 },
  { title: "The Midnight Library", authorName: "Matt Haig", releaseYear: 1920 },
  { title: "Project Hail Mary", authorName: "Andy Weir", releaseYear: 1921 },
  { title: "Fourth Wing", authorName: "Rebecca Yarros", releaseYear: 1923 },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

let filteredBooks = books.filter((book) => book.releaseYear < 1950);

filteredBooks.sort(sortByYear);
