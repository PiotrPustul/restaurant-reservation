import React from 'react';

import FormDate from './Elements/FormDate';
import FormTime from './Elements/FormTime';
import FormCovers from './Elements/FormCovers';
import FormDuration from './Elements/FormDuration';
import FormTable from './Elements/FormTable';

const FormDetails = () => {
   return (
      <>
         <FormDate />
         <FormTime />
         <FormCovers />
         <FormDuration />
         <FormTable />
      </>
   );
}

export default FormDetails;
