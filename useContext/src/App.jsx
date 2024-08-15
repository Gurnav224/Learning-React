/* eslint-disable react/prop-types */

import { useState } from "react"
import { books  as initialBooks} from "./data.js"



const BookDetails = ({id, title,coverImg,author, category , onCategoryChange})=>{

  return(
   

    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-md">
      <img src={coverImg} alt={title} className="w-24 h-32 object-cover mb-4" />
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className="text-gray-700 mb-1">{author}</p>
      <p className="text-gray-500">{category}</p>
     
      <div className="inline-block relative w-64">
      <select
       value={category}
       onChange={(e)=>onCategoryChange(id, e.target.value)}
        className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        name="bookStatus"
        id="bookStatus"
      >
        <option value="Currently Reading">Currently Reading</option>
        <option value="Read">Read</option>
        <option value="Want to Read">Want to Read</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M5.516 7.548l4.487 4.486 4.487-4.486L15 9.548l-5 5-5-5z"/>
        </svg>
      </div>
    </div>
    </div>
  )
}


const BookList = ({books , onCategoryChange})=>{
  return(
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {
        books.map((book)=>(
          
         <BookDetails 
         key={book.id}
         id={book.id}
         title={book.title}
         coverImg={book.coverImg}
         author={book.author}
         category={book.category}
         onCategoryChange={onCategoryChange}
         />
        ))
      }
    </div>
  )
}



const App = () => {
  const [books, setBooks] = useState(initialBooks);


  const handleCategoryChange = (id, newCategory) => {
    const updatedBooks = books.map((book) => 
      book.id === id ? { ...book, category: newCategory } : book
    );
    setBooks(updatedBooks);
  };

  const filterBooksByCategory = (category) => {
    return books.filter(book => book.category === category);
  };



  return (
   

      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Currently Reading</h2>
        <BookList books={filterBooksByCategory('Currently Reading')} onCategoryChange={handleCategoryChange} />
      </div>
      <div className="mb-8 w-full">
        <h2 className="text-2xl font-semibold mb-4">Read</h2>
        <BookList books={filterBooksByCategory('Read')} onCategoryChange={handleCategoryChange} />
      </div>
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Want to Read</h2>
        <BookList books={filterBooksByCategory('Want to Read')} onCategoryChange={handleCategoryChange} />
      </div>
    </div>
  )
} 

export default App
