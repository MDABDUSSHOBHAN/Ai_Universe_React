import React from 'react';
import { CalendarDaysIcon,ArrowRightIcon } from '@heroicons/react/24/solid'
const CartData = ({ data,setUniqueID}) => {
   
  
    const {id, image, name, published_in, features } = data;
   //Modal function 
 
    return (
        <div>
           

{/* New Cart Component */}
            <div className="card w-full h-96 bg-base-100 shadow-2xl">
                <figure className='w-full h-64' ><img  src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Features</h2>
                    {
                        
                        features.map((fet,index)=><p className='text-sm' > {index+1}. {fet}</p>)
                    }
                    <hr className='border-info my-2' />
                   
                    <h1 className='font-bold text-2xl'>{name}</h1>
                    <div className='flex justify-between'>
                    <div className='flex gap-2'>
                        <span>   <CalendarDaysIcon className="h-6 w-6 text-blue-500" /></span>
                        <p>{published_in}</p>
                    </div>
                    <div>
                       
                        <label onClick={()=>setUniqueID(id)} htmlFor="my_modal_6" className="btn">
                           <ArrowRightIcon className="h-6 w-6 text-blue-500" />
                        </label>
                       
                        
                  
                    </div>

                      </div>
                
                 
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default CartData;