export const books = [
    {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "coverImg": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg/1200px-To_Kill_a_Mockingbird_%28first_edition_cover%29.jpg",
      "category": "Read"
    },
    {
      "id": 2,
      "title": "1984",
      "author": "George Orwell",
      "coverImg": "https://i.pinimg.com/originals/bd/29/34/bd293499ee09b8fa4182f2ae24d83133.jpg",
      "category": "Currently Reading"
    },
    {
      "id": 3,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "coverImg": "https://i0.wp.com/americanwritersmuseum.org/wp-content/uploads/2018/02/CK-3.jpg?resize=267%2C400&ssl=1",
      "category": "Read"
    },
    {
      "id": 4,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfMNZK-yjJVRcV7QLX2Qh9ZmThvoeuBg-Xg&s",
      "category": "Want to Read"
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJRFur9gx583--YTeWiQ56nojsSRQVz4mTkg&s",
      "category": "Want to Read"
    },
    {
      "id": 6,
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "coverImg": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c71aa5b5-104c-4172-8706-69ca8d4c1f67/d5qru81-889a5279-8235-4e62-a7a0-215648c6bb2c.jpg/v1/fill/w_751,h_1064,q_70,strp/brave_new_world_book_cover___growing_humans_by_sunflowerman_d5qru81-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3NCIsInBhdGgiOiJcL2ZcL2M3MWFhNWI1LTEwNGMtNDE3Mi04NzA2LTY5Y2E4ZDRjMWY2N1wvZDVxcnU4MS04ODlhNTI3OS04MjM1LTRlNjItYTdhMC0yMTU2NDhjNmJiMmMuanBnIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.lDuyoQHrF9K-WiMGAaG-lFKTmSuUl6s4jbnYHBzBJfU",
      "category": "Currently Reading"
    },
    {
      "id": 7,
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLDQrpGghNVGRiHT7U3f3NDqqfiSTw7qZcBg&s",
      "category": "Read"
    },
    {
      "id": 8,
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8G7u6S3E2eJk2H2Lu7GSnOXtBJ0wHgJouQw&s",
      "category": "Want to Read"
    },
    {
      "id": 9,
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "coverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yw7FjA7_i7JWQqTyBQTsaydG0X9ihhkGBw&s",
      "category": "Currently Reading"
    }
  ];



  const handleChangeCategory = (id, newCategory) => {
  const updatedBook = books.map((book) => {
    if (book.id === id) {
      const updated = { ...book, category: newCategory };
      console.log(updated); // Log the updated book object
      return updated;
    }
    return book;
  });

  return updatedBook;
}

  handleChangeCategory(1,'Currently Reading')

  const filterByCategory = (category)=>books.filter((book)=>book.category===category);


  // console.log(filterByCategory('Currently Reading').length)