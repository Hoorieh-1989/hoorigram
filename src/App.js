import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import hoorigram from './hoorigram.png';
import nora from './nora.jpeg'
import sara from'./sara.jpeg';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { collection, getDocs } from "firebase/firestore";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));



function App() {
 const classes= useStyles();
 const [modalStyle] = useState(getModalStyle);

  const [posts,setPosts] = useState([]);
  const [open, setOpen]= useState(false);

// useEffect runs a piece of code base on a specicifi condition


// ...

useEffect(() => {
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    setPosts(querySnapshot.docs.map(doc => ({
      id: doc.id,
      post: doc.data()

    })));
  };

  fetchPosts();
}, []);


  return (
    <div className="app">
  <Modal
  open={open} 
  onClose={()=> setOpen(false)}
  >
    <div style={modalStyle} className={classes.paper}>
    <h2>doing signUp!!!</h2>
    </div>
  </Modal>

      <div className="app__header">
        <img 
          className="app__headerImage"
         src= {hoorigram}  
           style={{ width: '150px', height: '70px' }} 
               alt=""
      />
    
   </div>
      
        <Button onClick={()=>setOpen(true)}>"signUp"</Button>


       <h1>Hoorigram on the Go clone Instagram  !</h1>

       {
        posts.map(({id, post}) => (
          <Post key ={id} username={post.username} 
          caption={post.caption} 
          imageUrl={post.imageUrl}/>
        
        ))}
      </div>
  );
}

export default App;
