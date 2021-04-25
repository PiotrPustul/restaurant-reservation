import React from 'react';

import Date from './Date';
import Time from './Time';
import Covers from './Covers';
import Duration from './Duration';
import Table from './Table';

const FormDetails = () => {
   return (
      <div className="form-details-container">
         <Date />
         <Time />
         <Covers />
         <Duration />
         <Table />
      </div>
   );
}

export default FormDetails;
