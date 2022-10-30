import React, { useState } from "react";
import { useRouter } from "next/router";
import { IEvent } from "interfaces";
import Button from "components/atoms/Button";
import FormInput from "components/atoms/FormInput";

interface IEventProps {
  event: IEvent;
}

const Event: React.FC<IEventProps> = ({ event }) => {
  const router = useRouter();

  const [showDetails, setShowDetails] = useState(false);
  const [ticketAmount, setTicketAmount] = useState(0);

  return (
    <div
      className={`w-full border border-gray rounded-lg transition-all ease-in ${
        showDetails ? "max-h-96" : "max-h-[60px]"
      }`}
    >
      <div
        className='px-5 py-4 flex items-center cursor-pointer'
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className='font-semibold'>{event.name}</div>
        <div className='ml-4 text-sm'>{event.time}</div>
        <div className='ml-auto'>
          <span className='font-semibold text-lg'>${event.price}</span>
          &nbsp;per ticket
        </div>
      </div>
      {showDetails && (
        <div className='p-5 flex items-center justify-end gap-4'>
          <FormInput
            id='ticket-amount'
            name='ticket-amount'
            placeholder='Ticket Amount'
            type='number'
            value={ticketAmount > 0 ? ticketAmount : ""}
            onChange={e => setTicketAmount(+e.target.value)}
          />
          <Button
            className='w-32'
            label='Checkout'
            onClick={() => {
              if (ticketAmount) {
                router.push(`/checkout?id=${event.id}&amount=${ticketAmount}`);
              }
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Event;
