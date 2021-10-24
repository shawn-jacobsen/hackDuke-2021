import React, { useState } from 'react';
import './App.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import QueueItem from './Components/QueueItem';

const Song =  {
  name: "test song ",
  rating: 5
}

const Songs = [
  Song,
  Song,
  Song,
  Song
]

function App() {
  const [queue, updateQueue] = useState(Songs);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(queue);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateQueue(items);
  }

  return (
    <div className="App">
      <h1><span class="material-icons">audiotrack</span>Party Play</h1>
      <div className="song-list">
        {queue.map((song, i) => {
          return <QueueItem Name={song.name + i} Rating={song.rating}/>
        })}
      </div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="songs">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>
                            { name }
                          </p>
                        </li>
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
  );
}

export default App;
