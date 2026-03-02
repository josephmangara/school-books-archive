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
    <>
      <h1>High school setbooks over the years</h1>
      {ksceSetBooks?.map(book => (
        <div key={book.id}>
          <h2>{book.title}</h2>
          <img src={book.image_url} alt={book.title} className="mt-3 w-full h-48 object-cover rounded"/>
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>KCSE Years: {book.start_year} - {book.end_year}</p>
        </div>
      ))}
    </>
  )
}