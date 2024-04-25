const getTheTitles = function(books) {
    const bookTitles = [];
    books.forEach(book => bookTitles[bookTitles.length] = book.title);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
