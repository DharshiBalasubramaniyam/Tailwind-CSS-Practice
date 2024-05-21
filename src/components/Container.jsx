import React from 'react';
import Title from './Title';

function Container({ children, title }) {
  return (
    <section className="grid place-items-center border-b p-4">
      <Title name={title} />
      {children}
    </section>
  );
}

export default Container;
