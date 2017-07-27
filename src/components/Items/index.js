import React from 'react';
import Item from './Item';
import './items.css';

function Items( { data, empty } ) {

  if (!data[0]) { return (<p className="empty">{empty || "Empty..."}</p>); }

  const list = data.map((data, index) => {
    return (<Item key={`item-${index}`} text={data.text} />);
  });

  return (
    <section className="items">
      {list}
    </section>
  )
}

export default Items;
