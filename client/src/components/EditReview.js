import React, { Fragment , useState} from 'react'

const EditReview = ({review}) => {
    const [description ,setDescription] = useState(review.description);
    //edit description function
    const updateDescription = async (e) =>{
        e.preventDefault();
        try {
            const body = { description };
            const response = await fetch(`http://localhost:5000/reviews/${review.id}`,
            {
                method:"PUT",
                headers: {"content-type":"application/json"},
                body:JSON.stringify(body)
            }
            )
            window.location = "/"
        } catch (err) {
            
        }
    }
    return (
        <div>
            
              <button type="button" class="btn btn-warning" 
              data-toggle="modal" data-target={`#id${review.id}`}>
              Edit
              </button>


              <div class="modal" id={`id${review.id}`}
                onClick={()=> setDescription( review.description )}>
               <div class="modal-dialog">
              <div class="modal-content">

      
            <div class="modal-header">
            <h4 class="modal-title">Edit Review</h4>
            <button type="button" class="close" data-dismiss="modal"
            onClick={()=> setDescription( review.description )}>&times;</button>
      </div>

     
      <div class="modal-body">
        <input type="text" className="form-control" value={description} onChange={e => 
        setDescription(e.target.value)}/>
      </div>


      <div class="modal-footer">
      <button className="btn btn-danger" 
            onClick={e=>updateDescription(e)}>Edit</button>
      
        <button type="button" class="btn btn-danger" 
        data-dismiss="modal"
        onClick={()=> setDescription( review.description )}>Close</button>
      </div>

    </div>
  </div>
</div>

        </div>
    )
}

export default EditReview;
