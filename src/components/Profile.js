import React from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";

const users = [
  { id: "1", name: "Lebogang Rapodile", bio: "Web Developer | Blogger", location: "Waterfront, Cape town", posts: ["Just built my first React app! 🚀", "Learning JavaScript was difficult!"] },
  { id: "2", name: "Tumi Kekana", bio: "Tech Enthusiast | Gamer", location: "Johannesburg, Gauteng", posts: ["Trying out minecraft today! 🤩", "I AM THE GREATEST GAMER IN THE WORLD"] },
  { id: "3", name: "Chris Smith", bio: "Photographer| Content Creator", location: "Sea point, Cape Town", posts: ["Captured a stunning sunset today. 🌅", "Photography is all about the right moment! 📸"] }
];

const Profile = () => {
  const { userId } = useParams();
  
  // Find the user by ID
  const user = users.find((user) => user.id === userId);

  if (!user) {
    return <h2>User not found!</h2>;
  }

  return (
    <div className="profile">
      <h1>{user.name}</h1>
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Location:</strong> {user.location}</p>

      <h2>Recent Posts</h2>
      {user.posts.map((post, index) => (
        <div key={index} className="profile-post">
          <p>{post}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;
