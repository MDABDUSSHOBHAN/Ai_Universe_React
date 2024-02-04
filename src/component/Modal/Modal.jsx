import React from 'react';

const Modal = ({singel}) => {
  const {description,accuracy,features,image_link,integrations,use_cases,pricing} = singel;
  console.log(singel)
 
 console.log(Object.values(integrations||{}))
    return (
        <div>
   {/* Put this part before </body> tag */}
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box w-11/12 max-w-5xl">
  <div className="card card-side bg-base-100 ">
  
  <div className="card-body border-2 my-2 border-error">
    <h2 className="card-title">{description}</h2>
    
  <div className='flex justify-between' >
    <div><h3 className='text-3xl font-bold'>Features</h3>
     {/* {
      Object.values(features).map(value=><p>{value.feature_name}</p>)
    }  */}
    
    
    </div>
    <div>
      <h1 className='text-3xl font-bold'> Intregation</h1>
      {
        Object.values(integrations||{}).map(value=><p>{value}</p>)
      }
    
    
    
    </div>
  </div>




    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
  <figure><img src={image_link?image_link[0]:'null'} alt="Movie"/></figure>
</div>
    <div className="modal-action">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>

        </div>
    );
};

export default Modal;