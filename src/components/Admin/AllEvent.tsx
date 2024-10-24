import React from 'react';
import Card from '../Rusable component/Card';

const AllEvent = () => {
  return (
    <div className='flex flex-col gap-16'>
      <h2 className="text-xl font-bold m-5">All Events</h2>
     <div className='flex gap-5'>
     <Card name={"Agaaz"} timing={"10 PM"} eventCode={"E54646"} description={"This event is design for the purpose of the education"}/>
     <Card name={"Adhyay"} timing={"12 PM"} eventCode={"E54546"} description={"This event is design for the purpose of the sports"}/>
     <Card name={"Technika"} timing={"1 PM"} eventCode={"E55646"} description={"This event is design for the purpose of the education"}/>
     </div>
    </div>
  );
};

export default AllEvent;