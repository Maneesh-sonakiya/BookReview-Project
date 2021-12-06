import React ,{Fragment, useEffect, useState} from 'react'
import EditReview from './EditReview';
import { useParams } from 'react-router-dom';
import Inputreview from './Inputreview';
import Header from './Header';

 const ShowBookReview = () => {
        const { isbn , title }= useParams();
      console.log(isbn); 
    
      
    useEffect(()=>{
        getReviews(isbn);
    },[isbn]);
 

const getReviews = async (isbn) =>{
    try{
        const response = await fetch(`http://localhost:5000/reviews/${isbn}`);
        const jsonData = await response.json();
          setReviews(jsonData);   
        }
    catch (err) {
               console.error(err.message);
             }
    
    }

    const [reviews, setReviews]= useState([]);
    const DeleteReview = async (id) => {
      try {
          const DeleteReview = await fetch(`http://localhost:5000/reviews/${id}`,{
              method:"DELETE"
          })
          setReviews(reviews.filter(review=> review.id !== id))
          
      } catch (err) {
          console.error(err.message);
      }
      return (
          <div>
              
          </div>
      )
  }
    return (
        <Fragment>
        <Header/>
    
       <center> <h2>Book-{title}</h2></center>
        <h3>Reviews</h3> 
        <table className="table mt-5 text-center">

        <thead>
          <tr>
            
            <th>Review</th>
            <th>Rating</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {reviews.map(review =>(
            <tr >
            <td>{review.description}</td>
            <td>{review.rating}</td>
            
            <td><button className="btn btn-danger" 
            onClick={()=> DeleteReview(review.id)}>Delete</button>
            
            <EditReview review={review}/>
            </td> 
            </tr>

        ))}
            
    
        </tbody>
      </table>
      <div>
    </div>
      <Inputreview isbn={isbn} />
  
{/* changes
      */}
      {/*here we will pass isbn to give isbn detail to input */}

    </Fragment>
        
    )
}
export default ShowBookReview;
