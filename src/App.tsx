/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import * as rrweb from 'rrweb';
import { eventWithTimeAndPacker } from 'rrweb/typings/packer/base';
import Playback from './Playback';

const events: Array<eventWithTimeAndPacker> = [];

rrweb.record({
  emit(event) {
    console.log(event);
    events.push(event);
  },
});


function App() {
  const [count, setCount] = useState(0)
  const [displayPlayer, setDisplayPlayer] = useState(false);


  return (
    <>
      <div>
        
        {/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb.min.css"
/> */}
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div className="card">
        <button onClick={() => {
          console.log(events);
          setDisplayPlayer(true);
        }}>
          Replay events
          
        </button>
        {displayPlayer && <h1>testing</h1>}
        {displayPlayer && <Playback events={events}/>}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
