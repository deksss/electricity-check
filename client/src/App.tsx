import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getGroup } from './services/yasnoApi';

function App() {
  const [group, setGroup] = useState<number>();
  useEffect(() => {
    const getData = async () => {
      const group = await getGroup({
        region: 'kiev',
        street_id: '139', query: '15'
      });
      setGroup(group);
    }

    getData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

          Group: {group}

      </header>
    </div>
  );
}

export default App;
