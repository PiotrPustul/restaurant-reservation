import React, { useContext } from 'react';

import { BookingContext } from '../../../context/BookingContext';
import { SELECT_TABLE } from '../../../Reducers/actionTypes';

const TablesRow = (props) => {
   const { dispatch } = useContext(BookingContext);

   const selectTable = (e) => {
      const tables = [...document.getElementsByClassName('table')];
      const id = e.target.id;

      tables.forEach(table => {
         if (id === table.id) {
            table.classList.toggle("table--active");
         }

         if (id !== table.id) {
            table.classList.toggle("table--inactive");
         }
      });
      dispatch({ type: SELECT_TABLE, tableNr: id })
   };

   const createTables = array => {
      return array.map((item, index) => {
         return (
            <div key={index} className="restaurant__tables-row__table">
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
