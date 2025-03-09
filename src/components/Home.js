import React from 'react'
import './Home.css'

const Home = () => {
  const posts = [
    { id: 1, user: "Lebogang", content: "Hello world! Loving this app. 😍" },
    { id: 2, user: "Tumi", content: "The right gaming laptop makes all the difference 🚀" },
    { id: 3, user: "Chris", content: "Looking forward to the weekend! 🌴" },
  ];

  return (
    <div className="home">
      <h1>Content Feed</h1>
      {posts.map((post) => (
        <div key={post.id} className="post">
          <h3>{post.user}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home
