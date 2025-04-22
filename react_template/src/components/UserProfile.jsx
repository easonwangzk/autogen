// src/components/UserProfile.jsx
import React from 'react';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const profile = useSelector(state => state.user.profile);

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-2xl text-blue-500">
            {profile.name ? profile.name[0].toUpperCase() : 'U'}
          </span>
        </div>
        <div>
          <h2 className="font-semibold text-lg">{profile.name || 'Guest User'}</h2>
          <p className="text-gray-500">{profile.email || 'No email provided'}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <h3 className="font-medium mb-2">Health Summary</h3>
        <div className="space-y-2 text-sm">
          <p>Age: {profile.age || 'Not specified'}</p>
          <p>Gender: {profile.gender || 'Not specified'}</p>
          <p>Known Conditions: {profile.conditions?.join(', ') || 'None recorded'}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;