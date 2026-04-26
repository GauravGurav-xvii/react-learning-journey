import React from "react";
import Item from "./Item";

function PackingList({ items }) {
  return (
    <div>
      <ul className="list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
