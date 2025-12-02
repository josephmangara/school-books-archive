import { useState, useEffect } from "react";


export default function HighSchoolBooks() {

  const [ksceSetBooks, setKcseSetBooks] = useState();

  useEffect (() => {
    fetch("/api/setbooks")
      .then(res => res.json())
      .then(books => console.log(books))
  }, [])

  return (
    <>
      <h1>High school setbooks over the years</h1>
    </>
  )
}