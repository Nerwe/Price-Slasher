import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
      <h2 className="text-red-500 text-lg">Error</h2>
      <p className="text-gray-800 dark:text-gray-200 text-2xl">{error.message}</p>
    </div>
  );
};

export default Error;
