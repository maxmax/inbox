import React from 'react';
import './section.css';

function Section( { children, roleOrder  } ) {
  const classRole = roleOrder || 'auto';
  return (
    <section className={ 'section ' + classRole }>
      {children}
    </section>
  )
}

export default Section;
