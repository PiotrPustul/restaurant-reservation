import React, { useContext } from 'react';

import { BookingContext } from '../../../../context/BookingContext';

const TablesRow = (props) => {
   const { selectTable } = useContext(BookingContext);

   const createTables = array => {
      return array.map((item, index) => {
         return (
            <div key={index} className="restaurant__table">
               <span
                  className="table"
                  id={item}
                  onClick={selectTable}
               >
                  {item}
               </span>
            </div>
         );
      });
   };

   return (
      <div className="restaurant__tables-row">
         {createTables(props.row)}
      </div>
   );
}

export default TablesRow;
