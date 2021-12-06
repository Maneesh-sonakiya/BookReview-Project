import React ,{Fragment, useEffect, useState} from 'react'
import EditReview from './EditReview';
import Inputreview from './Inputreview';

 const ShowReview = () => {

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
  


    
    const getReviews = async () =>{
try{
    const response = await fetch("http://localhost:5000/reviews");
    const jsonData = await response.json();
      setReviews(jsonData);
    
}


catch (err) {
console.error(err.message);
}

    }

    useEffect(()=>{
        getReviews();
    },[]);

console.log(reviews);

    return (
        <Fragment>
        <h1>Reviews</h1> 
         <Inputreview/> 
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
            <tr key = {review.id}>
            <td>{review.description}</td>
            <td>{review.rating}</td>
            <td><button className="btn btn-danger" 
            onClick={()=> DeleteReview(review.id)}>Delete</button></td>
            <td><EditReview review={review}/>
            </td>
            </tr>

        ))};
            
    
        </tbody>
      </table>
      <div>
           

        </div>
    </Fragment>
        
    )
}
export default ShowReview;