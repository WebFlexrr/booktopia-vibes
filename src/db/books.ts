//MOCK Data
export const books = [
  {
    id: "1",
    title: "The Midnight Library",
    author: "Matt Haig",
    publisher: "Viking",
    publishDate: "August 13, 2020",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 16.99,
    originalPrice: 24.99,
    rating: 4.5,
    reviewCount: 2347,
    isInStock: true,
    description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?

A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.

Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?`,

    categories: ["Fiction", "Fantasy", "Contemporary"],
    isNew: true,
    pages: 304,
    isbn: "9780525559474",
    language: "English",
    awards: ["Goodreads Choice Award for Fiction (2020)"],
    format: "Hardcover",
    dimensions: "5.8 x 1.1 x 8.5 inches",
    weight: "1.1 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "John D.",
        rating: 5,
        date: "January 15, 2022",
        comment:
          "An absolute masterpiece! The concept is brilliant and execution is flawless.",
      },
      {
        user: "Sarah M.",
        rating: 4,
        date: "March 22, 2022",
        comment: "Beautifully written and thought-provoking. Highly recommend!",
      },
    ],
  },
  {
    id: "2",
    title: "Atomic Habits",
    author: "James Clear",
    publisher: "Viking",
    publishDate: "August 13, 2020",
    cover:
      "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 14.99,
    originalPrice: 24.99,
    rating: 4.8,
    reviewCount: 2347,
    isInStock: true,
    description: `Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?

A dazzling novel about all the choices that go into a life well lived, from the internationally bestselling author of Reasons to Stay Alive and How To Stop Time.

Somewhere out beyond the edge of the universe there is a library that contains an infinite number of books, each one the story of another reality. One tells the story of your life as it is, along with another book for the other life you could have lived if you had made a different choice at any point in your life. While we all wonder how our lives might have been, what if you had the chance to go to the library and see for yourself? Would any of these other lives truly be better?`,

    categories: ["Business", "Self Help"],
    isNew: true,
    pages: 304,
    isbn: "9780525559474",
    language: "English",
    awards: ["Goodreads Choice Award for Fiction (2020)"],
    format: "Hardcover",
    dimensions: "5.8 x 1.1 x 8.5 inches",
    weight: "1.1 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "John D.",
        rating: 5,
        date: "January 15, 2022",
        comment:
          "An absolute masterpiece! The concept is brilliant and execution is flawless.",
      },
      {
        user: "Sarah M.",
        rating: 4,
        date: "March 22, 2022",
        comment: "Beautifully written and thought-provoking. Highly recommend!",
      },
    ],
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80",
    price: 18.99,
    rating: 4.7,
    categories: ["Science Fiction", "Thriller"], // Added category
    isNew: true,
  },
  {
    id: "4",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 15.99,
    rating: 4.3,
    categories: ["Fantasy", "Romance"], // Added category
    isNew: true,
  },
  {
    id: "5",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    cover:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 12.99,
    rating: 4.6,
    categories: ["History", "Fiction", "Romance"], // Added category
    isNew: true,
  },
  {
    id: "6",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
    price: 11.99,
    rating: 4.9,
    categories: ["Classics", "Fiction"], // Added category
    isBestseller: true,
  },

  {
    id: "8",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 9.99,
    rating: 4.8,
    categories: ["Classics", "Romance"], // Added category
    isBestseller: true,
  },
  {
    id: "9",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 12.99,
    rating: 4.5,
    categories: ["Classics", "Fiction"], // Added category
    isBestseller: true,
  },
  {
    id: "10",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    cover:
      "https://media.gettyimages.com/id/96244061/photo/a-january-28-2010-photo-shows-a-copies-of-the-catcher-in-the-rye-by-author-j-d-salinger-at-a.jpg?s=612x612&w=0&k=20&c=50HGyz0N0SImY53d3YTwaPGHVbLJujbq4h_fCZ1H6jM=",
    price: 11.99,
    rating: 4.3,
    categories: ["Classics", "Coming-of-Age"], // Added category
    isBestseller: true,
  },
  {
    id: "11",
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover:
      "https://kitabwalah.com/wp-content/uploads/2024/03/the-alchemist.jpg",
    price: 8.99,
    originalPrice: 14.99,
    rating: 4.6,
    categories: ["Fiction", "Philosophy"], // Added category
  },
  {
    id: "12",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.7,
    categories: ["Non Fiction", "History"], // Added category
  },
  {
    id: "13",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    price: 9.99,
    originalPrice: 16.99,
    rating: 4.5,
    categories: ["Self Help", "Humor"], // Added category
  },
  {
    id: "14",
    title: "Educated",
    author: "Tara Westover",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80",
    price: 11.99,
    originalPrice: 17.99,
    rating: 4.4,
    categories: ["Memoir", "Biography"], // Added category
  },
  {
    id: "15",
    title: "Becoming",
    author: "Michelle Obama",
    cover:
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
    price: 13.99,
    originalPrice: 22.99,
    rating: 4.8,
    categories: ["Memoir", "Biography"], // Added category
  },
];
