import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AuctionsList = () => {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    axios.get('https://44.sudeka.com/auctions')
      .then(response => setAuctions(response.data))
      .catch(error => console.error('Error al obtener subastas:', error));
  }, []);

  return (
    <div>
      <h1>Subastas Disponibles</h1>
      <ul>
        {auctions.map(auction => (
          <li key={auction.id}>
            <strong>{auction.title}</strong> - Precio inicial: ${auction.starting_price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuctionsList;