import React, { useEffect, useRef } from 'react';
import  RRWebPlayer  from 'rrweb-player';
import { eventWithTimeAndPacker } from 'rrweb/typings/packer/base';
import 'rrweb-player/dist/style.css';

const Playback = ({ events }: { events: Array<eventWithTimeAndPacker> }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
    if (playerRef.current) {
      // Initialize the rrweb-player
      new RRWebPlayer({
        target: playerRef.current, // Specify the container for the player
        props: {
          events, // The events recorded by rrweb.record()
          //width: 800, // Optional: Set the player width
          height: 450, // Optional: Set the player height
          // You can specify other rrweb-player options here
        },
      });
    }
  }, [events]); // Reinitialize the player if the events change

  return <div ref={playerRef} />;
};

export default Playback;
