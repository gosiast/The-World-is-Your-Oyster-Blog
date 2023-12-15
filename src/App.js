import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Post from './Post';
import About from './About';


function App ()  {
  const [posts, setPosts] = useState([
    {
      id: 1,
      userName: 'John Doe',
      message: 'This is the first blog post.',
      timestamp: new Date().toLocaleString(),
    },
    {
      id: 2,
      userName: 'Jane Smith',
      message: 'Here is another interesting post.',
      timestamp: new Date(Date.now() - 1000000).toLocaleString(),
    },
    {
      id: 3,
      userName: 'Alice Johnson',
      message: 'A post about coding and React.',
      timestamp: new Date(Date.now() - 2000000).toLocaleString(),
    },
    {
      id: 4,
      userName: 'Bob Anderson',
      message: 'The fourth post is about travels.',
      timestamp: new Date(Date.now() - 3000000).toLocaleString(),
    },
  ]);
  return (
    <div>
      < Navbar />
      <h1>Welcome to My Blog!</h1>
{/* Map through the posts and render the Post component */}
            {posts.map((post) => (
              <Post
                key={post.id}
                userName={post.userName}
                message={post.message}
                timestamp={post.timestamp}
              />
            ))}      < Footer />
    </div>
  );
};

export default App;
