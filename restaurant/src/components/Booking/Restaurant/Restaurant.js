import React from 'react';

import TablesRow from './Tables-row/TablesRow';

const Restaurant = () => {
  const firstRow = [1, 2, 3, 4];
  const secondRow = [5, 6, 7, 8];
  const thirdRow = [9, 10, 11, 12];

  return (
    <div className="restaurant">
      <TablesRow row={firstRow} />
      <TablesRow row={secondRow} />
      <TablesRow row={thirdRow} />
    </div>
  );
};

export default Restaurant;