import React, { useState } from 'react';

import { CapacitorWidget } from './package/widget';

function makeId(length: number) {
  let result = '';
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function App() {
  const [value, setValue] = useState<string | null>(makeId(10));

  function setItem() {
    return CapacitorWidget.setItem({
      group: 'group.com.example.secrets',
      key: 'my-secret-api-key',
      value: makeId(10),
    });
  }

  async function getItem() {
    const response = await CapacitorWidget.getItem<string>({
      group: 'group.com.example.secrets',
      key: 'my-secret-api-key',
    });

    setValue(response.results);
  }

  async function reload() {
    await setItem();
    await getItem();
    await CapacitorWidget.reloadWidget();
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        color: '#fff',
        background: '#000',
        fontSize: '1.5rem',
      }}
    >
      {value}
      <button onClick={reload}>Refresh</button>
    </div>
  );
}

export default App;
