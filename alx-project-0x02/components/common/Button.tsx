import React from 'react';
import { ButtonProps } from '@/interfaces';

const Button: React.FC<ButtonProps> = ({ label, size = 'medium', shape = 'rounded-md', onClick, className }) => {
  // Define size styles
  const sizeClasses = {
    small: 'px-2 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  // Combine default and custom classes
  const buttonClass = `bg-blue-600 text-white ${sizeClasses[size]} ${shape} ${className}`;

  return (
    <button onClick={onClick} className={`${buttonClass} focus:outline-none hover:bg-blue-700`}>
      {label}
    </button>
  );
};

export default Button;
