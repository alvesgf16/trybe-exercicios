type Book = {
  book: string;
  author: string;
  genre: string;
}

export default class Wishlist {
  private wishlist: Book[];

  constructor() {
    this.wishlist = [];
  }

  addToWishList(book: Book): void {
    this.wishlist.push(book);
  }

  showWishlist(): void {
    console.log(this.wishlist);
  }
}

const wishlist = new Wishlist();
wishlist.addToWishList({ book: 'The Road', author: 'Cormac McCarthy', genre: 'Dystopia' });
wishlist.showWishlist();