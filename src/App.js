import logo from './logo.svg';
import React,{useState} from 'react';
import hoorigram from './hoorigram.png';
import nora from './nora.jpeg'
import sara from'./sara.jpeg';
import './App.css';
import Post from './Post';

function App() {

  const [posts,setPosts] = useState ([
    {
      username:"cleverhouri",
      caption:"YEY it works",
      imageUrl: "https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png",
    },
    {
      username:"Nora",
       caption:"Yohoo" ,
       imageUrl:{nora},
    }
  ]);

  return (
    <div className="app">
      <div className="app__header">
        <img 
          className="app__headerImage"
         src= {hoorigram}    style={{ width: '150px', height: '70px' }}     alt=""
      />
    
   </div>
      
       <h1>Hoorigram on the Go clone Instagram  !</h1>

      
      
      
        <Post username="cleverHourie" caption="YEY it works" imageUrl="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"/>
        <Post username="Nora" caption="Yohoo" imageUrl={nora}/>
        <Post username="Sara" caption="this is fun" imageUrl={sara}/>
        {/*posts}*/} 
         {/*posts}*/}

      </div>

  );
}

export default App;
