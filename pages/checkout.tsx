// @ts-nocheck
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import Layout from "components/Layout";
import FormInput from "components/atoms/FormInput";
import Button from "components/atoms/Button";
import Card from "components/molecules/Card";
import AddCardForm from "components/molecules/AddCardForm";
import { EVENTS } from "../constants";
import { ICard } from "interfaces";

const Checkout = () => {
  const router = useRouter();

  const [cards, setCards] = useState<ICard[]>([]);
  const [selectedCard, setSelectedCard] = useState(-1);
  const [showAddCard, setShowAddCard] = useState(false);

  const event = useMemo(() => {
    if (router.query && router.query.id) {
      return EVENTS.find(event => event.id === router.query.id);
    }
    return null;
  }, [router]);

  const handleAddCard = (newCard: ICard) => {
    if (newCard.name && newCard.number) {
      setCards([...cards, newCard]);
      if (cards.length === 0) {
        setSelectedCard(0);
      }
      setShowAddCard(false);
    }
  };

  return (
    <Layout>
      <div className='max-w-5xl mx-auto bg-white p-5'>
        <div className='underline text-link'>
          <Link href='/'>Back</Link>
        </div>
        <div className='flex gap-5'>
          <div>
            <div className='p-5 border border-gray rounded-md'>
              <h1 className='font-bold text-xl'>
                Delivery &nbsp;
                <FontAwesomeIcon className='text-button' icon={faCheckCircle} />
              </h1>
              <h2 className='font-semibold mt-4 text-lg'>
                {event ? event.name : ""}
              </h2>
              <p className='mt-3 text-gray'>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
            <div className='p-5 mt-5 border border-gray rounded-md'>
              <h1 className='font-bold text-xl'>
                Payment&nbsp;
                <FontAwesomeIcon className='text-button' icon={faCheckCircle} />
              </h1>
              <h2 className='ml-5 font-semibold mt-4 text-lg'>
                Use Credit / Debit Card
              </h2>
              <div className='mt-2 flex flex-col gap-2'>
                {cards.map((card, index) => (
                  <Card
                    isSelected={index === selectedCard}
                    onClick={() => setSelectedCard(index)}
                    card={card}
                    key={`card-${index}`}
                  />
                ))}
              </div>
              {showAddCard ? (
                <AddCardForm addCard={handleAddCard} />
              ) : (
                <div
                  className='ml-4 mt-4 flex items-center gap-2 text-link cursor-pointer'
                  onClick={() => setShowAddCard(true)}
                >
                  <span className='text-5xl'>+</span>
                  <span>Add New Card</span>
                </div>
              )}
            </div>
          </div>
          <div className='p-5 border border-gray rounded-md w-60 flex-shrink-0'>
            <div className='flex justify-between'>
              <h1 className='font-bold text-xl'>Total</h1>
              <h1 className='font-bold text-xl'>
                ${event?.price * router.query.amount}
              </h1>
            </div>
            <Button
              className='mt-2'
              label='Purchase'
              disabled={selectedCard === -1}
              onClick={() => {
                alert(
                  `You are purchasing ${
                    router.query.amount
                  } tickets with a credit card ending in ${cards[
                    selectedCard
                  ].number.slice(-4)}`
                );
              }}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
