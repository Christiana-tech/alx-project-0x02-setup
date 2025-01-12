import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-lg font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-700">Address:</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
