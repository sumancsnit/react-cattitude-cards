import React from 'react';
import PropTypes from 'prop-types';
import './card.style.css';

const Card = (props) => {
  const { monster } = props;
  return (
    <div className='card-container'>
      <img
        alt='monster'
        src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
      />
      <h1>{monster.name}</h1>
      <p>{monster.email}</p>
    </div>
  );
};

Card.propTypes = {};

export default Card;
