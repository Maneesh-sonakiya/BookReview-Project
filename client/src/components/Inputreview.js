import React,{ useState , useParams,useEffect} from 'react'
import Axios from 'axios'
import ShowBookReview ,{imp} from './ShowBookReview';


const  Inputreview = ({isbn}) => {
 
  console.log(isbn);
// };

//const isbn= {ShowBookReview.isbn}
//main

    const url="";
    const [data, setData]= useState({
        description:"",
        rating:"",
        isbn:isbn
    });
    const handle =(e)=>{
       const newData ={...data}
       newData[e.target.id]=e.target.value
       setData(newData)
       console.log(newData)
        // setRating(e.target.value)
    }
     
  function submit(e) {
        e.preventDefault();
        Axios.post(url,{
                description:data.description,
                rating:data.rating,
               isbn:isbn
        })
        .then( res=>{
            console.log(res.data);
        }

        )
}

        const PostData = async (e)=>{
                    e.preventDefault();
                    const {description ,rating,isbn}= data;
                    const res = await fetch("/reviews",{
                        method:"POST",
                        headers: {
                          "Content-Type":"application/json"

                        },
                        body:JSON.stringify({
                            description,
                            rating,
                            isbn
                        })
                     
                    })

                 //   const res = await res.json();
        }


  return (
    <div>
          <h1 className= "text-center mt-5"> Welcome post Your Lovely review here</h1>
        
          <form className="d-flex mt-5" method="POST" onSubmit={(e)=> submit(e)} >
          {/*here we add isbn */}
          
          <input type="text"  value={isbn} onChange={(e)=> handle(e)} 
          id="isbn"/>

          <input type="text"  placeholder="review" onChange={(e)=> handle(e)} 
          id="description"
          value={data.description}  className="form-control"  />
            
             
            <label>Rating:</label>
          <input type="range" onChange={(e)=> handle(e)} value={data.rating}
          id="rating"  placeholder="rating 1-5" min="1" max="5"/>
          
          
          <button className="btn btn-success"  onClick={PostData}  >submit</button>
          </form>
         </div>
        
    
    );
}

export default Inputreview;




