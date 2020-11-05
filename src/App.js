/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts.js';
import SearchBar from './components/SearchBar/SearchBar.js';
// Import the dummyData
import dummyData from './dummy-data';
import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  const [posts, setPosts] = useState(dummyData);
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.
  
  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.
@@ -27,14 +33,26 @@ const App = () => {
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
  
      console.log("click", postId);

      setPosts(posts.map((item, index) => {
        if (item.id === postId) {
          return { ...item, likes: item.likes + 1 };
        } else {
          return { ...item };
        }
      }));
    }
  console.log('testing')

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      <h1>hiiiiiii</h1>
      <SearchBar />
      <Posts likePost={likePost} posts={posts}/>
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
