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
    publisher: "Avery",
    publishDate: "October 16, 2018",
    cover:
      "https://images.unsplash.com/photo-1535398089889-dd807df1dfaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 11.99,
    originalPrice: 19.99,
    rating: 4.6,
    reviewCount: 1854,
    isInStock: true,
    isBestseller: true,
    description:
      "An easy & proven way to build good habits & break bad ones. Tiny Changes, Remarkable Results. No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.",
    categories: ["Self-Help", "Productivity", "Business"],
    isNew: false,
    pages: 320,
    isbn: "978-0735211292",
    language: "English",
    awards: ["New York Times Bestseller", "USA Today Bestseller"],
    format: "Hardcover",
    dimensions: "6.1 x 1.2 x 9.2 inches",
    weight: "1.3 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Peter J.",
        rating: 5,
        date: "April 8, 2023",
        comment:
          "Life-changing! This book has completely transformed my approach to habits.",
      },
      {
        user: "Lisa K.",
        rating: 4,
        date: "June 20, 2023",
        comment:
          "Practical and insightful. I've already started implementing the strategies outlined in this book.",
      },
    ],
  },
  {
    id: "3",
    title: "Project Hail Mary",
    author: "Andy Weir",
    publisher: "Ballantine Books",
    publishDate: "May 4, 2021",
    cover:
      "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1355&q=80",
    price: 14.99,
    originalPrice: 24.99,
    rating: 4.7,
    reviewCount: 4532,
    isInStock: true,
    description:
      "Ryland Grace is the sole survivor on a desperate, last-chance mission - and if he fails, humanity will cease to exist.  Except that right now, he doesn't know that. He can't even remember his own name, let alone the nature of his mission or how to complete it. All he knows is that he's been asleep for a very, very long time. And he's just been awakened to find himself millions of miles from home, with nothing but two corpses for company.",
    categories: ["Science Fiction", "Thriller", "Space Opera"],
    isNew: false,
    pages: 496,
    isbn: "978-0593135203",
    language: "English",
    awards: ["Goodreads Choice Award for Science Fiction (2021)"],
    format: "Hardcover",
    dimensions: "6.14 x 1.57 x 9.25 inches",
    weight: "1.4 pounds",

    ageRange: "Adult",
    reviews: [
      {
        user: "Mike S.",
        rating: 5,
        date: "July 10, 2022",
        comment:
          "Another incredible read from Andy Weir. I couldn't put it down!",
      },
      {
        user: "Emily B.",
        rating: 4,
        date: "September 1, 2022",
        comment:
          "A thrilling and thought-provoking adventure. Highly recommend for science fiction fans.",
      },
    ],
  },
  {
    id: "4",
    title: "The Invisible Life of Addie LaRue",
    author: "V.E. Schwab",
    publisher: "Tor Books",
    publishDate: "October 6, 2020",
    cover:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 13.99,
    originalPrice: 19.99,
    rating: 4.3,
    reviewCount: 6754,
    isInStock: true,
    description:
      "France, 1714: in a moment of desperation, a young woman makes a faustian bargain to live forever-but curses herself to be forgotten by everyone she meets. Thus begins the extraordinary life of Addie LaRue, and a dazzling adventure that will play out across centuries and continents, as a young woman learns how to live a life where no one remembers her name, and how to fall in love with a man who does.",
    categories: ["Fantasy", "Romance", "Historical Fiction"],
    isNew: false,
    pages: 448,
    isbn: "978-1250246653",
    language: "English",
    awards: ["Goodreads Choice Award for Fantasy (2020)"],
    format: "Hardcover",
    dimensions: "6.38 x 1.56 x 9.44 inches",
    weight: "1.5 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Sarah J.",
        rating: 5,
        date: "November 12, 2021",
        comment:
          "A beautiful and heartbreaking story about love, loss, and the power of memory.",
      },
      {
        user: "David W.",
        rating: 4,
        date: "December 5, 2021",
        comment:
          "A unique and captivating read. I was drawn in from the first page.",
      },
    ],
  },
  {
    id: "5",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    publisher: "Ecco Press",
    publishDate: "September 20, 2011",
    cover:
      "https://images.unsplash.com/photo-1495640388908-05fa85288e61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    price: 10.99,
    originalPrice: 16.99,
    rating: 4.6,
    reviewCount: 8765,
    isInStock: true,
    isBestseller: true,
    description:
      "A tale of gods, kings, and warriors, The Song of Achilles focuses on the relationship between Achilles and Patroclus, two young princes of the House of Aeacus. Their bond deepens as they train for war, but their fates are forever altered by the prophecy surrounding the Trojan War.",
    categories: ["Non Fiction", "Fantasy"],
    isNew: false,
    pages: 378,
    isbn: "978-0062060624",
    language: "English",
    awards: ["Orange Prize for Fiction (2012)"],
    format: "Paperback",
    dimensions: "5.31 x 0.84 x 8 inches",
    weight: "0.5 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Jessica R.",
        rating: 5,
        date: "February 14, 2023",
        comment:
          "A breathtaking retelling of a classic story. I was captivated by the characters and the emotional depth.",
      },
      {
        user: "Christopher M.",
        rating: 4,
        date: "March 28, 2023",
        comment:
          "A must-read for fans of Greek mythology and historical fiction. Beautifully written and emotionally resonant.",
      },
    ],
  },
  {
    id: "6",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J. B. Lippincott & Co. (1960)",
    publishDate: "July 11, 1960",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
    price: 9.99,
    originalPrice: null,
    rating: 4.9,
    reviewCount: 10452,
    isInStock: true,
    isBestseller: true,
    description:
      "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it, To Kill A Mockingbird has endured as a classic of modern American literature.",
    categories: ["Classics", "Fiction", "Southern Gothic"],
    isNew: false,
    pages: 324,
    isbn: "978-0061120084",
    language: "English",
    awards: ["Pulitzer Prize for Fiction (1961)"],
    format: "Paperback",
    dimensions: "5.06 x 0.78 x 7.5 inches",
    weight: "0.4 pounds",
    ageRange: "13 and up",
    reviews: [
      {
        user: "Amanda L.",
        rating: 5,
        date: "May 15, 2023",
        comment: "A timeless masterpiece. Everyone should read this book.",
      },
      {
        user: "Brian S.",
        rating: 5,
        date: "June 2, 2023",
        comment:
          "A powerful and moving story about justice, prejudice, and compassion.",
      },
    ],
  },
  {
    id: "8",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publisher: "T. Egerton (1813)",
    publishDate: "January 28, 1813",
    cover:
      "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 6.99,
    originalPrice: null,
    rating: 4.8,
    reviewCount: 7843,
    isInStock: true,
    description:
      "Pride and Prejudice is a romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet, the dynamic protagonist of the book who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and real goodness.",
    categories: ["Classics", "Romance", "Fiction"],
    isNew: false,
    pages: 432,
    isbn: "978-0141439518",
    language: "English",
    awards: [],
    format: "Paperback",
    dimensions: "4.14 x 0.64 x 6.14 inches",
    weight: "0.3 pounds",
    ageRange: "14 and up",
    reviews: [
      {
        user: "Katherine P.",
        rating: 5,
        date: "April 1, 2023",
        comment:
          "A witty and charming classic. I always enjoy revisiting this story.",
      },
      {
        user: "Michael D.",
        rating: 4,
        date: "May 8, 2023",
        comment:
          "A timeless tale of love and social expectations. Austen's writing is as sharp and engaging as ever.",
      },
    ],
  },
  {
    id: "9",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publisher: "Charles Scribner's Sons (1925)",
    publishDate: "April 10, 1925",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    price: 7.99,
    originalPrice: null,
    rating: 4.5,
    reviewCount: 6321,
    isInStock: true,
    description:
      "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the book depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    categories: ["Classics", "Fiction", "Thriller"],
    isNew: false,
    pages: 218,
    isbn: "978-0743273565",
    language: "English",
    awards: [],
    format: "Paperback",
    dimensions: "5.1 x 0.8 x 7.6 inches",
    weight: "0.4 pounds",
    ageRange: "14 and up",
    reviews: [
      {
        user: "Elizabeth G.",
        rating: 5,
        date: "June 18, 2023",
        comment:
          "A haunting and unforgettable portrait of the Roaring Twenties.",
      },
      {
        user: "William T.",
        rating: 4,
        date: "July 5, 2023",
        comment:
          "A classic for a reason. Fitzgerald's prose is simply beautiful.",
      },
    ],
  },
  {
    id: "10",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publisher: "Little, Brown and Company",
    publishDate: "July 16, 1951",
    cover:
      "https://media.gettyimages.com/id/96244061/photo/a-january-28-2010-photo-shows-a-copies-of-the-catcher-in-the-rye-by-author-j-d-salinger-at-a.jpg?s=612x612&w=0&k=20&c=50HGyz0N0SImY53d3YTwaPGHVbLJujbq4h_fCZ1H6jM=",
    price: 8.99,
    originalPrice: null,
    rating: 4.3,
    reviewCount: 5432,
    isInStock: true,
    description:
      "The Catcher in the Rye is a 1951 novel by J. D. Salinger. A controversial novel originally published for adults, it has become popular with adolescent readers for its themes of teenage angst and alienation, and as a critique of phoniness and superficiality in adult society.",
    categories: ["Classics", "Coming-of-Age", "Fiction"],
    isNew: false,
    pages: 277,
    isbn: "978-0316769488",
    language: "English",
    awards: [],
    format: "Paperback",
    dimensions: "5.12 x 0.75 x 7.56 inches",
    weight: "0.5 pounds",
    ageRange: "14 and up",
    reviews: [
      {
        user: "Jennifer H.",
        rating: 4,
        date: "August 21, 2023",
        comment:
          "A classic coming-of-age story that continues to resonate with readers today.",
      },
      {
        user: "Matthew B.",
        rating: 3,
        date: "September 10, 2023",
        comment:
          "I can appreciate its cultural impact, but I didn't find it particularly enjoyable.",
      },
    ],
  },
  {
    id: "11",
    title: "The Alchemist",
    author: "Paulo Coelho",
    publisher: "HarperOne",
    publishDate: "1988",
    cover:
      "https://kitabwalah.com/wp-content/uploads/2024/03/the-alchemist.jpg",
    price: 8.99,
    originalPrice: 14.99,
    rating: 4.6,
    reviewCount: 9876,
    isInStock: true,
    isBestseller: true,
    description:
      "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. It has been translated into over 80 languages and has sold over 150 million copies worldwide.",
    categories: ["Fiction", "Philosophy", "Inspirational"],
    isNew: false,
    pages: 192,
    isbn: "978-0062502179",
    language: "English",
    awards: [],
    format: "Paperback",
    dimensions: "5.25 x 0.75 x 8 inches",
    weight: "0.4 pounds",
    ageRange: "14 and up",
    reviews: [
      {
        user: "Sophia L.",
        rating: 5,
        date: "October 5, 2023",
        comment:
          "A timeless story about following your dreams and listening to your heart.",
      },
      {
        user: "Daniel M.",
        rating: 4,
        date: "November 17, 2023",
        comment:
          "A thought-provoking and inspiring read. It encourages you to reflect on your own journey.",
      },
    ],
  },
  {
    id: "12",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    publisher: "Harper",
    publishDate: "February 10, 2015",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2342&q=80",
    price: 12.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviewCount: 4321,
    isInStock: true,
    description:
      "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014. The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century, focusing on Homo sapiens.",
    categories: ["Non-Fiction", "History", "Science"],
    isNew: false,
    pages: 464,
    isbn: "978-0062316097",
    language: "English",
    awards: [],
    format: "Paperback",
    dimensions: "5.5 x 1.1 x 8.27 inches",
    weight: "0.8 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Olivia C.",
        rating: 5,
        date: "December 2, 2023",
        comment:
          "An eye-opening and thought-provoking exploration of our species.",
      },
      {
        user: "Ethan K.",
        rating: 4,
        date: "January 14, 2024",
        comment: "A fascinating read, even if I didn't agree with everything.",
      },
    ],
  },
  {
    id: "13",
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    publisher: "HarperOne",
    publishDate: "September 13, 2016",
    cover: "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
    price: 9.99,
    originalPrice: 16.99,
    rating: 4.5,
    reviewCount: 8765,
    isInStock: true,
    description:
      "In this generation-defining self-help guide, a blogger cuts through the crap to offer his counterintuitive philosophy for living a happy life.",
    categories: ["Self-Help", "Humor", "Non-Fiction"],
    isNew: false,
    pages: 224,
    isbn: "978-0062457714",
    language: "English",
    awards: ["#1 New York Times Bestseller"],
    format: "Hardcover",
    dimensions: "5.5 x 0.88 x 8.25 inches",
    weight: "1 pound",
    ageRange: "Adult",
    reviews: [
      {
        user: "Ava G.",
        rating: 4,
        date: "February 8, 2024",
        comment:
          "Refreshing and funny. It's a different take on self-improvement.",
      },
      {
        user: "Noah W.",
        rating: 3,
        date: "March 22, 2024",
        comment: "I liked some parts more than others, but it's worth a read.",
      },
    ],
  },
  {
    id: "14",
    title: "Educated",
    author: "Tara Westover",
    publisher: "Random House",
    publishDate: "February 20, 2018",
    cover:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1370&q=80",
    price: 11.99,
    originalPrice: 17.99,
    rating: 4.4,
    reviewCount: 5643,
    isInStock: true,
    isBestseller: true,
    description:
      "Educated is a 2018 memoir by American author Tara Westover. The book is about Westover's life growing up in a survivalist Mormon family in rural Idaho, her lack of formal education, and her eventual pursuit of one.",
    categories: ["Memoir", "Biography", "Autobiography"],
    isNew: false,
    pages: 336,
    isbn: "978-0399590504",
    language: "English",
    awards: [
      "Goodreads Choice Award for Memoir & Autobiography (2018)",
      "Barnes & Noble Book of the Year (2018)",
    ],
    format: "Hardcover",
    dimensions: "6.15 x 1.18 x 9.25 inches",
    weight: "1.1 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Isabella T.",
        rating: 5,
        date: "April 16, 2024",
        comment:
          "A powerful and inspiring memoir. Westover's story is both heartbreaking and hopeful.",
      },
      {
        user: "Jackson S.",
        rating: 4,
        date: "May 28, 2024",
        comment:
          "An incredible story of resilience and the transformative power of education.",
      },
    ],
  },
  {
    id: "15",
    title: "Becoming",
    author: "Michelle Obama",
    publisher: "Crown Publishing Group",
    publishDate: "November 13, 2018",
    cover:
      "https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1376&q=80",
    price: 13.99,
    originalPrice: 22.99,
    rating: 4.8,
    reviewCount: 7654,
    isInStock: true,
    description:
      "In her memoir, a work of deep reflection and mesmerizing storytelling, Michelle Obama invites readers into her world, chronicling the experiences that have shaped her—from her childhood on the South Side of Chicago to her years as an executive balancing the demands of motherhood and work, to her time spent at the world's most famous address.",
    categories: ["Memoir", "Biography", "Autobiography"],
    isNew: false,
    pages: 448,
    isbn: "978-1524763138",
    language: "English",
    awards: ["Goodreads Choice Award for Memoir & Autobiography (2018)"],
    format: "Hardcover",
    dimensions: "6.8 x 1.5 x 9.5 inches",
    weight: "1.6 pounds",
    ageRange: "Adult",
    reviews: [
      {
        user: "Amelia K.",
        rating: 5,
        date: "June 30, 2024",
        comment:
          "An inspiring and insightful memoir from one of the most admired women in the world.",
      },
      {
        user: "Benjamin P.",
        rating: 4,
        date: "July 18, 2024",
        comment:
          "A well-written and engaging memoir that offers a glimpse into the life of a remarkable woman.",
      },
    ],
  },
];
