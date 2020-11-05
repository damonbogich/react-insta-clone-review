import React from 'react';
import Comment from './Comment';
import './Comments.css';

const Comments = props => {
  // 🔥 Make sure the parent of Comments is passing the right props!
  const { comments } = props;
  console.log(comments, 'comments')

  return (
    <div>
      {/* map through the comments prop and render a Comment for every piece of data */}
      {comments.map(item => {
        return <Comment comment={item}/>
      })}
    </div>
  );
};

export default Comments;
