import React, { useState } from 'react';
import axios from 'axios';

const CreateAuction = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startingPrice, setStartingPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://auction-app-vert.vercel.app/auctions', { title, description, starting_price: startingPrice })
      .then(response => {
        console.log('Subasta creada:', response.data);
        setTitle('');
        setDescription('');
        setStartingPrice('');
      })
      .catch(error => console.error('Error al crear subasta:', error));
  };

  return (
    <div>
      <h1>Crear Subasta</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio inicial"
          value={startingPrice}
          onChange={(e) => setStartingPrice(e.target.value)}
          required
        />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateAuction;