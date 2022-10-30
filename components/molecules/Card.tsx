import React from "react";
import FormInput from "components/atoms/FormInput";
import { ICard } from "interfaces";

interface ICardProps {
  card: ICard;
  isSelected: boolean;
  onClick: () => void;
}

const Card: React.FC<ICardProps> = ({ card, isSelected, onClick }) => {
  return (
    <div
      className={`p-4 border border-cyan-200 cursor-pointer ${
        isSelected ? "bg-slate-50" : ""
      }`}
      onClick={onClick}
    >
      <div className='flex items-start gap-3'>
        <FormInput
          type='radio'
          name='active-credit-card'
          className='mt-4'
          checked={isSelected}
          onChange={() => {}}
        />
        <div className='flex items-start gap-2'>
          <img src='/assets/images/visa.png' />
          <div>
            <h2 className='font-semibold mt-2 text-lg'>
              Visa - {card.number.slice(-4)}
            </h2>
            <div className='mt-2 text-gray'>
              {card.name} | exp. {card.expiry}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
