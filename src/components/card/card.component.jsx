import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='col-md-4 mt-4'>
    <div className="card-container">
      <iframe
        className="img-fluid"
        alt='Gifs'
        src={props.gif.embed_url}
      />
      <h2> {props.gif.title} </h2>
    </div>
  </div>
);
