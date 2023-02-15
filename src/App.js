import logo from './logo.svg';
import hoorigram from './hoorigram.png';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
         src= {hoorigram}    style={{ width: '150px', height: '70px' }}     alt=""
      />
    
   </div>
      
       <h1>Hoorigram on the Go  !</h1>
      
       

        <Post/>
        {/*posts}*/} 
         {/*posts}*/}

      </div>

  );
}

export default App;
