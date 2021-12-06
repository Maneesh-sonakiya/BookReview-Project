import React ,{Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

//import ShowReview from './ShowReview';

 const ShowBook = () => {

    const [books, setBooks]= useState([]);
     const DeleteBook = async (isbn) => {
      try {
         const Deletebook = await fetch(`http://localhost:5000/book/${isbn}`,{
             method:"DELETE"
           })
           setBooks(books.filter(book=> book.isbn !== isbn))
          
       } catch (err) {
           console.error(err.message);
       }
       return (
          <div>
              
          </div>
      )
  }
  


    
    const getBooks = async () =>{
try{
    const response = await fetch("http://localhost:5000/book");
    const jsonData = await response.json();
      setBooks(jsonData);
    
}


catch (err) {
console.error(err.message);
}

    }

    useEffect(()=>{
        getBooks();
    },[]);

console.log(books);

    return (
        <Fragment>
        <div className="Container">
        <h1>books</h1> 
        <table className="table mt-5 text-center">

        <thead>
          <tr>
            
            <th>Title</th>
            <th>isbn</th>
            <th>Review</th>
          </tr>
        </thead>
        <tbody>
        {books.map(book =>(
            <tr key = {book.isbn}>
            <td>{book.title}</td>
            <td>{book.isbn}</td>
            <td> <Link to={`ShowBookReview/${book.isbn}/${book.title}`}>
            <button className="btn btn-success" 
            
           >Showreview</button>
           </Link></td>
            


            </tr>

        ))}
            
    
        </tbody>
      </table>
      <div>
           

        </div>
        </div>
    </Fragment>
        
    )
}
export default ShowBook;