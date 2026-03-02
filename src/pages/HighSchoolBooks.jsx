import { useState, useEffect } from "react";


export default function HighSchoolBooks() {

  const [ksceSetBooks, setKcseSetBooks] = useState();

  useEffect (() => {
    fetch("/api/setbooks")
      .then(res => res.json())
      .then(books => {
        console.log(books);
        setKcseSetBooks(books);
      }
    )
    .catch(err => {
      console.error("Error fetching set books:", err)
    })
  }, [])

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-center">High school setbooks over the years</h1>
      {ksceSetBooks?.map(book => (
        <div 
          key={book.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
        >

          <img src={book.image_url} alt={book.title} className="mt-3 w-auto h-96 object-cover rounded"/>
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p><span className="font-medium">Author:</span> {book.author}</p>
          <p><span className="font-medium">Publisher:</span> {book.publisher}</p>
          <p><span className="font-medium">KCSE Years:</span>{" "} {book.start_year} - {book.end_year}</p>
        </div>
      ))}
    </div>
  )
}