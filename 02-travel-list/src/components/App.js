import React from 'react';
import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Item from './Item';
import Stats from './Stats';
function App() {
  const [items, setItems] = React.useState([
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: true },
    { id: 3, description: "Charger", quantity: 1, packed: false },
  ]);
  return (
    <div>
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
