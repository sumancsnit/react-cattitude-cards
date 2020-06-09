import React from 'react';
import './card-list.style.css';
import Card from '../card/card.component';

export const CardList = (props) => {
  const { cats } = props;
  return (
    <div className='card-list'>
      {cats.map((cat) => (
        <Card key={cat.id} cat={cat} />
      ))}
    </div>
  );
};
