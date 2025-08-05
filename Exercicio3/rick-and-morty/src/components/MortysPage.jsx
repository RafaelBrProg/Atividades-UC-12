import React, { useState } from 'react';

const MortysPage = () => {
  const mortys = [
    {
      name: 'Morty Smith (Prime)',
      img: 'MortyPrime.webp',
      species: 'Humano',
      status: 'Vivo',
      dimension: 'C-137',
      realidade: 'Universo original C-137',
      batalha: 'Astuto, porém emocionalmente instável. Depende de Rick.',
      lore: 'Morty Prime é o Morty original pertencente ao Rick Prime, o cientista mais cruel e egoísta do multiverso.'
    },
    {
      name: 'Evil Morty',
      img: 'Evil_Morty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Various Dimensions',
      realidade: 'Desconhecida',
      batalha: 'Manipulador, estrategista, altamente inteligente.',
      lore: 'Evil Morty rejeitou a dependência dos Ricks e orquestrou uma fuga do ciclo do multiverso controlado.'
    },
    {
      name: 'Morty Smith (C-131)',
      img: 'Morty_Smith(C-131).webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'C-131',
      realidade: 'Universo C-131',
      batalha: 'Comum, sem habilidades de destaque.',
      lore: 'Um Morty alternativo com poucas diferenças em relação ao Prime.'
    },
    {
      name: 'Morticia',
      img: 'Morticia.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Various Dimensions',
      realidade: 'Dimensão desconhecida',
      batalha: 'Forte presença e inteligência emocional.',
      lore: 'Versão feminina de Morty que representa diversidade no multiverso.'
    },
    {
      name: 'Adult Morty (Rickmurai Jack)',
      img: 'Adult Morty (Rickmurai Jack).webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Prime Dimension',
      realidade: 'Dimensão Prime',
      batalha: 'Veterano, com experiência acumulada.',
      lore: 'Uma versão mais velha e madura de Morty que enfrentou muitos traumas.'
    },
    {
      name: 'Agent Morty',
      img: 'AgentMorty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Prime Dimension',
      realidade: 'Dimensão Prime',
      batalha: 'Treinado, especialista em espionagem.',
      lore: 'Morty com treinamento especial para atuar como agente secreto.'
    },
    {
      name: 'Gunk Morty',
      img: 'Gunk Morty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Various Dimensions',
      realidade: 'Lixões interdimensionais',
      batalha: 'Resistente e imprevisível.',
      lore: 'Criado entre detritos, Gunk Morty é mais durão do que parece.'
    },
    {
      name: 'Genius Morty',
      img: 'Genius Morty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Various Dimensions',
      realidade: 'Realidade avançada',
      batalha: 'Extremamente inteligente, mas arrogante.',
      lore: 'Supera intelectualmente a maioria dos Ricks, mas é isolado.'
    },
    {
      name: 'Diamond Eyes Morty',
      img: 'Diamond Eyes Morty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Prime Dimension',
      realidade: 'Realidade desconhecida',
      batalha: 'Visão aprimorada, reflexos rápidos.',
      lore: 'Seus olhos de diamante permitem ver através de ilusões e mentiras.'
    },
    {
      name: 'Detective Morty',
      img: 'Detective Morty.webp',
      species: 'Human',
      status: 'Alive',
      dimension: 'Prime Dimension',
      realidade: 'Cidade Nua do Multiverso',
      batalha: 'Raciocínio lógico apurado.',
      lore: 'Investiga crimes interdimensionais. Especialista em mistérios.'
    }
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
              style={{ marginTop: '10px', padding: '5px 10px', backgroundColor: '#007BFF', color: 'white', border: 'none', cursor: 'pointer' }}
            >
              {expanded === index ? 'Ver Menos' : 'Ver Mais'}
            </button>
            {expanded === index && (
              <div style={{ marginTop: '10px' }}>
                <p><strong>Espécie:</strong> {morty.species}</p>
                <p><strong>Status:</strong> {morty.status}</p>
                <p><strong>Dimensão:</strong> {morty.dimension}</p>
                <p><strong>Realidade Original:</strong> {morty.realidade}</p>
                <p><strong>Características de Batalha:</strong> {morty.batalha}</p>
                <p><strong>Lore:</strong> {morty.lore}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MortysPage;
