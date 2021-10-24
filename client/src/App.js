import React, { useState, useEffect } from 'react';
import './App.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Axios from 'axios';
import QueueItem from './Components/QueueItem';

const Song1 = { id: "1", name: "test song ", rating: 32 }
const Song2 = { id: "2", name: "test song ", rating: 55 }
const Song3 = { id: "3", name: "test song ", rating: 51 }
const Song4 = { id: "4", name: "test song ", rating: 21 }

const Songs = [ Song1, Song2, Song3, Song4 ]

function App() {
  const [songQueue, setSongQueue] = useState([]);

  useEffect(() => {
    Axios({
      method: "GET",
      url: "http://localhost:8888/sessions/current",
    }).then((res) => setSongQueue(res.data.queue));
  });

  function handleOnDragEnd(result) {
    console.log(result);
    if (!result.destination) return;

    const items = Array.from(songQueue);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    Axios({
      data: {
        
      },
      method: "GET",
      url: "http://localhost:8888/sessions/reorder",
    }).then((res) => setSongQueue(res.data.queue));

    setSongQueue(items);
  }

  return (
    <div className="App">
      <h1><span className="material-icons">audiotrack</span>Party Play</h1>
      <div className="song-list">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="songs">
              {(provided) => (
                <ul className="song-list" {...provided.droppableProps} ref={provided.innerRef}>
                  {songQueue.map(({id, name, rating}, index) => {
                    return (
                      <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                          <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}><QueueItem Name={name} Rating={rating} /></li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
      </div>
    </div>
  );
}

export default App;