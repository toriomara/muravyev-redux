import './App.css';
import { useSelector } from 'react-redux';
import Comments from './Comments';
import Likes from './Likes';
import Title from './title';

function App() {
  const error = useSelector((state) => state.appReducer.error);
  console.log(error);
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          {error && <div className='error-message'>{error}</div>}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title/>
            <Likes/>
          </div>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;