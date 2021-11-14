import React from 'react';

const Profile = () => {
  const user = JSON.parse(window.localStorage.getItem('Guideme-app-user'));

  return (
    <div>
      My profile
      {
        ` ${user.username}`
      }
    </div>
  );
};

export default Profile;
