import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Post from './Post';

function App ()  {
  return (
    <div>
      < Navbar />
      <h1>Welcome to My Blog!</h1>
      {/* Add your blog posts here */}
      < Post username="Gosia" message= "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups." timestamp="09:36"/>
      < Footer />
    </div>
  );
};

export default App;
