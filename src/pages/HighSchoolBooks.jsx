import { useEffect, useState } from "react";

export default function SetBooks() {
  const [kcseSetBooks, setKcseSetBooks] = useState([]);

  useEffect(() => {
    fetch("/api/setbooks")
      .then((res) => res.json())
      .then((books) => {
        console.log("Fetched setbooks:", books);
        setKcseSetBooks(books);
      })
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">KCSE Setbooks</h2>

      {kcseSetBooks.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kcseSetBooks.map((book) => (
            <div
              key={book.id}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <h3 className="text-xl font-bold mb-2">{book.title}</h3>

              {/* Display all fields — adjust names to match your backend */}
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Publisher:</strong> {book.publisher}</p>
              <p><strong>Category:</strong> {book.category}</p>
              <p><strong>Class Level:</strong> {book.class_level}</p>
              <p><strong>Year:</strong> {book.year}</p>
              <p><strong>Edition:</strong> {book.edition}</p>
              <p><strong>ISBN:</strong> {book.isbn}</p>

              {/* If your API includes image URLs */}
              {book.cover && (
                <img
                  src={book.cover}
                  alt={book.title}
                  className="mt-3 w-full h-48 object-cover rounded"
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
