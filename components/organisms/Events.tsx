import React from "react";
import Event from "components/molecules/Event";
import { EVENTS } from "../../constants";

const Events = () => {
  return (
    <div className='max-w-3xl w-full px-5 py-4 bg-white mx-auto mt-20 rounded-2xl'>
      <h1 className='font-bold text-2xl mb-5'>All Events</h1>
      <div className='flex flex-col gap-3'>
        {EVENTS.map(event => (
          <Event event={event} key={event.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
