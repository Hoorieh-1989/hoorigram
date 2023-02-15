import React from 'react';
import  './Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post() {
  return (
    <div className="post">
        <div className="post__header">
       < Avatar
        ClassNanme="post__avatar"
        alt="Hourieh"
        src="/static/images/avatar/1.png"></Avatar>




        <h3>Username</h3>
        {/*header -> avatar + username */}

</div>
        <img className="post__image" src="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png" alt="" ></img>
        {/*image*/}

        <h4 className ="post__text"><strong>cleverqazi</strong>WOW</h4>
        {/*username +caption */}
        
    </div>
  )
}

export default Post