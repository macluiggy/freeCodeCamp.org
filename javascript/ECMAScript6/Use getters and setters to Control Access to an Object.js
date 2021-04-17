class Book {
  constructor(author) {
    this.author = author;
  }
  // getter
  get writer() {
    return this.author;
  }
  // setter
  set writer(updatedAuthor) {
    this.author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);