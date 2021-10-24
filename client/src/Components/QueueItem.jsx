import './QueueItem.css';

function QueueItem(props) {
  return (
    <div className="queue-item">
      <p className="song-name">{props.Name}</p>
      <p className="song-rating">Rating: {props.Rating}</p>
      <p className="song-rating">{props.Rating}</p>
      <p className="song-drag"><span class="material-icons">drag_indicator</span></p>
    </div>
  );
}

export default QueueItem;
