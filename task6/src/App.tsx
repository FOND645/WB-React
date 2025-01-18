import React from 'react';
import './App.css';
import { inventory } from './inventory.ts';
import { Item } from './Item.tsx';

function App() {
  return (
    <div className="App">
      <div className="inventory">
        {inventory.items.map(item => <Item Item={item} key={`${item.X}:${item.Y}`}/>)}
      </div>
    </div>
  );
}

export default App;
