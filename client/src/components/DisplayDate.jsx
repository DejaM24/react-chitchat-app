import React from 'react';
import { format } from 'date-fns';

export default function DateDisplay() {
  const currentDate = new Date();
  const formattedDate = format(currentDate, 'MMMM dd, yyyy');

  return (
    <div className="date-display">
      <p>{formattedDate}</p>
    </div>
  );
}


