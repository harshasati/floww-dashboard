import React from 'react';

function Profile({ user }) {
  return (
    <div className="card">
      <img src={user.profilePic} alt="Profile" width={100} style={{ borderRadius: '50%' }} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

export default Profile;
