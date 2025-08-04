import React, { useState } from 'react';

const MortysPage = () => {
  const mortys = [
    { name: 'Morty Smith (Prime)', img: 'MortyPrime.webp', species: 'Human', status: 'Alive', dimension: 'Prime Dimension' },
    { name: 'Evil Morty', img: 'Evil_Morty.webp', species: 'Human', status: 'Alive', dimension: 'Various Dimensions' },
    { name: 'Morty Smith (C-131)', img: 'Morty_Smith(C-131).webp', species: 'Human', status: 'Alive', dimension: 'C-131' },
    { name: 'Morticia', img: 'Morticia.webp', species: 'Human', status: 'Alive', dimension: 'Various Dimensions' },
    { name: 'Adult Morty (Rickmurai Jack)', img: 'Adult Morty (Rickmurai Jack).webp', species: 'Human', status: 'Alive', dimension: 'Prime Dimension' },
    { name: 'Agent Morty', img: 'Agent Morty', species: 'Human', status: 'Alive', dimension: 'Prime Dimension' },
    { name: 'Gunk Morty', img: 'Gunk Morty.webp', species: 'Human', status: 'Alive', dimension: 'Various Dimensions' },
    { name: 'Genius Morty', img: 'Genius Morty.webp', species: 'Human', status: 'Alive', dimension: 'Various Dimensions' },
    { name: 'Diamond Eyes Morty', img: 'Diamond Eyes Morty.webp', species: 'Human', status: 'Alive', dimension: 'Prime Dimension' },
    { name: 'Detective Morty', img: 'Detective Morty.webp', species: 'Human', status: 'Alive', dimension: 'Prime Dimension' },
  ];

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <h2>Mortys</h2>
      <div className="personagens">
        {mortys.map((morty, index) => (
          <div key={index} className={`Morty${index + 1}`} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {morty.name}</p>
            <img src={`/img/mortys/${morty.img}`} alt={morty.name} width="100" style={{ borderRadius: '8px' }} />
            <button 
              onClick={() => handleToggle(index)} 
              style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}>
              Ver Mais
            </button>
            {expanded === index && (
              <div style={{ marginTop: '10px' }}>
                <p><strong>Espécie:</strong> {morty.species}</p>
                <p><strong>Status:</strong> {morty.status}</p>
                <p><strong>Dimensão:</strong> {morty.dimension}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MortysPage;
