import React from 'react';

function Card({ imagemSrc, altText, titulo, descricao, linkHref }) {
  return (
    <article className="card">
      <img src={imagemSrc} alt={altText} /> 
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      {/* Mantido <a> para navegação, use <Link> se estiver com React Router */}
      <a href={linkHref}>→</a> 
    </article>
  );
}

export default Card;