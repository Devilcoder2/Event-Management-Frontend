import React from 'react';
import Card from '../Rusable component/Card';

const AllEvent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">All Events</h2>
     <div className='flex gap-5'>
     <Card/>
     <Card/>
     <Card/>
     </div>
    </div>
  );
};

export default AllEvent;