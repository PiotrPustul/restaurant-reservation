import React from 'react';

const MealPosition = ({ position = [], title }) => {
   return (
      <div className="menu__name" >
         <h2 className="menu__heading">{title}</h2>
         <div className="menu__container">
            {position.length < 1 ? <h2>We change our menu for You!</h2> : position.map((el, index) => (
               <div className="menu__meal" key={index}>
                  <p className="menu__title">{el.title}</p>
                  <p className="menu__price">{el.price}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default MealPosition;
