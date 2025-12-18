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
        <div key={book.id}>{book.title}</div>
      ))}
    </>
  )
}