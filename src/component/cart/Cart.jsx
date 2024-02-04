import React, { useEffect, useState } from 'react';
import CartData from '../CartData/CartData';
import Button from '../header/Button/Button';
import Modal from '../Modal/Modal';


const Cart = () => {
const[data,setData]= useState([]);
//data fetching.....
const[singel,setSingel] = useState([]);
const [state,setState] = useState(false);
//share component...

const [uniqueID,setUniqueID] = useState(null);



// Data shorthig Method....
const published=()=>{
const sortData = data.sort((a,b)=>{
    return new Date(a.published_in) - new Date(b.published_in);
});
setData([...data,sortData]);
}
// Data shorting Method....
useEffect(()=>{

    fetch(`https://openapi.programming-hero.com/api/ai/tools`)
    .then(response=>response.json())
    .then(element=>  setData(element.data.tools))
},[])
//single data fetch By Modal....
useEffect(()=>{
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueID}`)
    .then(response=>response.json())
    .then(Modaldata=>setSingel(Modaldata.data))
},[uniqueID])





const handleAll= ()=>{
    setState(true);

}
console.log(uniqueID);
    return (
        <>
        <span onClick={published}>
        <Button>SORT BY DATE</Button>
        </span>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-8'>
           
        {
            data.slice(0,state?12:6).map((d)=><CartData
            
            key={d.id}
            data={d}
            setUniqueID={setUniqueID}
            >  
            </CartData>)
        }
        <div className='text-center'>
            

            {!state&&
                (
                    <span onClick={handleAll}>
                        <Button>SEE MORE</Button>
                    </span>
                )
            }
            <Modal singel={singel}></Modal>
           
            
      
        </div>
           
        </div>
        </>
    );

};

export default Cart;