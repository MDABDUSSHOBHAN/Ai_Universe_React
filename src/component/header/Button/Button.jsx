import React, { Children } from 'react';

const Button = (props) => {
//   const {Children} = props;
const {children} = props;
//   console.log(props.children);
    
    return (
        <>
        <div className='text-center'>
        <button className="btn btn-primary text-white">{children}</button>

        </div>
         
           
        
        </>
    );
};

export default Button;