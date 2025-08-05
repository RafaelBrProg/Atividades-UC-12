import React, { useState } from 'react';

const RicksPage = () => {
  const ricks = [
    {
      name: 'Rick Prime',
      img: 'RickPrime.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'C-137',
      realidade: 'Universo original C-137',
      batalha: 'Genial, mas impulsivo e egoísta.',
      lore: 'Rick Prime é o Rick original e mais poderoso, um cientista altamente inteligente e desbocado.'
    },
    {
      name: 'Rick Sanchez',
      img: 'RickSanchez.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Desconhecida',
      batalha: 'Genial e insensível, mas com um coração (meio escondido).',
      lore: 'Rick Sanchez é o cientista mais brilhante do multiverso, mas também é um dos mais problemáticos e egocêntricos.'
    },
    {
      name: 'Memory Rick',
      img: 'MemoryRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Realidade desconhecida',
      batalha: 'Esquivo e emocionalmente instável.',
      lore: 'Memory Rick tem memórias que variam entre as dimensões, afetando sua percepção da realidade e suas escolhas.'
    },
    {
      name: 'Rick Sanchez (C-131)',
      img: 'RickSanchez(C-131).webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'C-131',
      realidade: 'Universo C-131',
      batalha: 'Inteligente, mas menos experiente em comparação com o Prime.',
      lore: 'Rick alternativo com um estilo mais calmo, mas ainda muito inteligente.'
    },
    {
      name: 'Evil Rick',
      img: 'EvilRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Desconhecida',
      batalha: 'Manipulador, estrategista, vilão sem remorsos.',
      lore: 'Evil Rick rejeita a moralidade e se volta contra os outros Ricks e Mortys.'
    },
    {
      name: 'Doofus Rick',
      img: 'DoofusRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Realidade cômica',
      batalha: 'Desajeitado e inofensivo.',
      lore: 'Doofus Rick é uma versão mais boba e ingênua de Rick, sem a malícia e inteligência que o caracterizam.'
    },
    {
      name: 'Homesteader Rick',
      img: 'HomesteaderRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Realidade rural',
      batalha: 'Simplicidade e sobrevivência rural.',
      lore: 'Homesteader Rick prefere uma vida tranquila e simples, longe da loucura do multiverso.'
    },
    {
      name: 'Adjudicator Rick',
      img: 'AdjudicatorRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Realidade jurídica',
      batalha: 'Imparcial, mas com um senso de justiça rígido.',
      lore: 'Adjudicator Rick é responsável por administrar e resolver conflitos interdimensionais com uma mão de ferro.'
    },
    {
      name: 'Pickle Rick',
      img: 'PickleRick.webp',
      species: 'Picles',
      status: 'Vivo',
      dimension: 'Prime Dimension',
      realidade: 'Dimensão Prime',
      batalha: 'Transformado em picles, Rick usa sua inteligência para lutar pela sobrevivência.',
      lore: 'Rick se transforma em picles para escapar de um compromisso com a terapia familiar, vivendo uma série de aventuras insanas.'
    },
    {
      name: 'Toxic Rick',
      img: 'ToxicRick.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'Various Dimensions',
      realidade: 'Realidade tóxica',
      batalha: 'Químico e perigoso, com personalidade corrosiva.',
      lore: 'Toxic Rick é uma versão de Rick que abraça os piores aspectos de sua natureza destrutiva e venenosa.'
    }
  ];

  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div>
      <h2>Ricks</h2>
      <div className="personagens">
        {ricks.map((rick, index) => (
          <div key={index} className={`Rick${index + 1}`} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <p><strong>Name:</strong> {rick.name}</p>
            <img src={`/img/ricks/${rick.img}`} alt={rick.name} width="100" style={{ borderRadius: '8px' }} />
            <button
              onClick={() => handleToggle(index)}
              style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              {expanded === index ? 'Ver Menos' : 'Ver Mais'}
            </button>
            {expanded === index && (
              <div style={{ marginTop: '10px' }}>
                <p><strong>Espécie:</strong> {rick.species}</p>
                <p><strong>Status:</strong> {rick.status}</p>
                <p><strong>Dimensão:</strong> {rick.dimension}</p>
                <p><strong>Realidade Original:</strong> {rick.realidade}</p>
                <p><strong>Características de Batalha:</strong> {rick.batalha}</p>
                <p><strong>Lore:</strong> {rick.lore}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RicksPage;
