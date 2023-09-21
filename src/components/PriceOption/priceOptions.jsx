import React from 'react';
import PriceOption from './PriceOption';


const PriceOptions = () => {
  
  const  gymMemberships= [
      {
        "id": 1,
        "name": "Basic Membership",
        "price": 50.00,
        "features": [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Locker room access",
          "Free towel service",
          "Use of sauna and steam room",
          "Easy to join"
        ]
      },
      {
        "id": 2,
        "name": "Premium Membership",
        "price": 75.00,
        "features": [
          "Access to all gym areas",
          "Group fitness classes included",
          "Personal trainer sessions available",
          "Locker with key",
          "Nutrition consultation"
        ]
      },
      {
        "id": 3,
        "name": "Student Membership",
        "price": 30.00,
        "features": [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Valid student ID required",
         
          "Access during off-peak hours"
        ]
      },
      {
        "id": 4,
        "name": "Family Membership",
        "price": 120.00,
        "features": [
          "Access for two adults and two children",
          "Access to all gym areas",
         
          "Discounted group fitness classes",
          "Childcare services"
        ]
      },
      {
        "id": 5,
        "name": "Senior Membership",
        "price": 40.00,
        "features": [
          "Access to cardio equipment",
          "Access to weightlifting area",
          "Ages 65 and older",
          "Access during off-peak hours",
          "Senior fitness classes"
        ]
      }
    ];
  
  
      
    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-10 '>Best prices of the town </h2>
           <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
           {gymMemberships.map(option=><PriceOption key={option.id} option={option}></PriceOption>) }
           </div>
        </div>
    );
};

export default PriceOptions;