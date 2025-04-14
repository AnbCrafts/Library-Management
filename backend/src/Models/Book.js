import mongoose from "mongoose";

const BookSchema = new mongoose.Schema(
    { 
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        coverImg: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        authorImg: {
            type: String,
            required:true
             
        },
        price: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        publisher: {
            type: String,
            default: "Unknown",
        },
        publicationYear: {
            type: Number,
            default: new Date().getFullYear(),
        },
        language: {
            type: String,
            required: true,
        },
        totalCount: {
            type: Number,
            default: 0,
            required:true
        },
        availableCount: {
            type: Number,
            default: 0,
            required:true

        },
        borrowedCount: {
            type: Number,
            default: 0,
            required:true

        },
        location: {
            type: String,
            required: true,
        }, 
        status: { 
            type: String,
            default: "Available",
            enum: ["Available", "Not Available", "Reserved", "Borrowed", "Out of Stock"],
            required:true

        },
    },
    { timestamps: true }
);

const Book = mongoose.models.Books || mongoose.model("Book", BookSchema);

// const books = [
//     {
//       "title": "The Silent Patient",
//       "description": "A psychological thriller about a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
//       "coverImg": "banner2.avif",
//       "author": "Alex Michaelides",
//       "authorImg": "author6.webp",
//       "price": 12.99,
//       "category": "Thriller",
//       "publisher": "Celadon Books",
//       "publicationYear": 2019,
//       "language": "English",
//       "totalCount": 20,
//       "availableCount": 15,
//       "borrowedCount": 5,
//       "location": "Shelf A1",
//       "status": "Available"
//     },
//     {
//       "title": "Atomic Habits",
//       "description": "An easy and proven way to build good habits and break bad ones.",
//       "coverImg": "banner2.avif",
//       "author": "James Clear",
//       "authorImg": "author6.webp",
//       "price": 18.50,
//       "category": "Self-Help",
//       "publisher": "Avery",
//       "publicationYear": 2018,
//       "language": "English",
//       "totalCount": 30,
//       "availableCount": 20,
//       "borrowedCount": 10,
//       "location": "Shelf B2",
//       "status": "Available"
//     },
//     {
//       "title": "The Alchemist",
//       "description": "A novel about a young shepherd on a journey to fulfill his personal legend.",
//       "coverImg": "banner2.avif",
//       "author": "Paulo Coelho",
//       "authorImg": "author6.webp",
//       "price": 14.99,
//       "category": "Fiction",
//       "publisher": "HarperOne",
//       "publicationYear": 1988,
//       "language": "Portuguese",
//       "totalCount": 25,
//       "availableCount": 10,
//       "borrowedCount": 15,
//       "location": "Shelf C3",
//       "status": "Available"
//     },
//     {
//       "title": "Sapiens: A Brief History of Humankind",
//       "description": "Exploring how Homo sapiens came to dominate the world.",
//       "coverImg": "banner2.avif",
//       "author": "Yuval Noah Harari",
//       "authorImg": "author6.webp",
//       "price": 22.99,
//       "category": "History",
//       "publisher": "Harper",
//       "publicationYear": 2011,
//       "language": "English",
//       "totalCount": 18,
//       "availableCount": 8,
//       "borrowedCount": 10,
//       "location": "Shelf D4",
//       "status": "Available"
//     },
//     {
//       "title": "Rich Dad Poor Dad",
//       "description": "A book that explores financial literacy and investing.",
//       "coverImg": "banner2.avif",
//       "author": "Robert T. Kiyosaki",
//       "authorImg": "author6.webp",
//       "price": 16.99,
//       "category": "Finance",
//       "publisher": "Plata Publishing",
//       "publicationYear": 1997,
//       "language": "English",
//       "totalCount": 22,
//       "availableCount": 12,
//       "borrowedCount": 10,
//       "location": "Shelf E5",
//       "status": "Available"
//     },
//     {
//       "title": "Harry Potter and the Sorcerer's Stone",
//       "description": "A young wizard's journey begins at Hogwarts.",
//       "coverImg": "banner2.avif",
//       "author": "J.K. Rowling",
//       "authorImg": "author6.webp",
//       "price": 25.00,
//       "category": "Fantasy",
//       "publisher": "Scholastic",
//       "publicationYear": 1997,
//       "language": "English",
//       "totalCount": 50,
//       "availableCount": 35,
//       "borrowedCount": 15,
//       "location": "Shelf F6",
//       "status": "Available"
//     },
//     {
//       "title": "The Subtle Art of Not Giving a F*ck",
//       "description": "A book about embracing limitations and living a meaningful life.",
//       "coverImg": "banner2.avif",
//       "author": "Mark Manson",
//       "authorImg": "author6.webp",
//       "price": 19.99,
//       "category": "Self-Help",
//       "publisher": "HarperOne",
//       "publicationYear": 2016,
//       "language": "English",
//       "totalCount": 28,
//       "availableCount": 18,
//       "borrowedCount": 10,
//       "location": "Shelf G7",
//       "status": "Available"
//     },
//     {
//       "title": "Dune",
//       "description": "A science fiction classic about politics, religion, and power in a distant galaxy.",
//       "coverImg": "banner2.avif",
//       "author": "Frank Herbert",
//       "authorImg": "author6.webp",
//       "price": 24.50,
//       "category": "Science Fiction",
//       "publisher": "Chilton Books",
//       "publicationYear": 1965,
//       "language": "English",
//       "totalCount": 15,
//       "availableCount": 5,
//       "borrowedCount": 10,
//       "location": "Shelf H8",
//       "status": "Available"
//     },
//     {
//       "title": "The Hobbit",
//       "description": "A fantasy adventure following Bilbo Baggins’ journey.",
//       "coverImg": "banner2.avif",
//       "author": "J.R.R. Tolkien",
//       "authorImg": "author6.webp",
//       "price": 18.75,
//       "category": "Fantasy",
//       "publisher": "George Allen & Unwin",
//       "publicationYear": 1937,
//       "language": "English",
//       "totalCount": 35,
//       "availableCount": 28,
//       "borrowedCount": 7,
//       "location": "Shelf I9",
//       "status": "Available"
//     },
//     {
//       "title": "1984",
//       "description": "A dystopian novel about a totalitarian society.",
//       "coverImg": "banner2.avif",
//       "author": "George Orwell",
//       "authorImg": "author6.webp",
//       "price": 14.50,
//       "category": "Dystopian",
//       "publisher": "Secker & Warburg",
//       "publicationYear": 1949,
//       "language": "English",
//       "totalCount": 40,
//       "availableCount": 30,
//       "borrowedCount": 10,
//       "location": "Shelf J10",
//       "status": "Available"
//     }
//   ]
  
  
//   Book.insertMany(books)
//   .then(() => {
//     console.log("Books inserted successfully!");
//     mongoose.connection.close();
//   })
//   .catch((err) => console.log(err));


export default Book;
