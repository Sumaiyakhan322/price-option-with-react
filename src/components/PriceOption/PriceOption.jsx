import React from 'react';
import PropTypes from 'prop-types'
import {BsArrowRightCircleFill} from 'react-icons/bs'

const PriceOption = ({option}) => {
    // console.log(option);
    const {name,id,price,features}=option
    return (
        

          <div className='bg-blue-300 p-6 rounded-lg flex flex-col '>
          
          <h2 className='text-center'>
            <span className='text-5xl '>{price}</span>
            <span className='text-lg '>/mon</span>
           </h2>
           <h4 className='text-3xl text-center my-8'>{name}</h4>
           {
            features.map((feature,idx)=>(
                <div key={idx} className='flex items-center gap-3 flex-grow '><BsArrowRightCircleFill className='text-lg'></BsArrowRightCircleFill><div >{feature}</div></div>
              
                
                
            ))
           }
          <div>
           <button className='px-4 py-2 w-full bg-blue-900 text-white mt-4 rounded-lg'>Buy now</button>
          </div>
          </div>

         
         
         
    )
        
};
PriceOption.propTypes={
    option:PropTypes.object
}


export default PriceOption;