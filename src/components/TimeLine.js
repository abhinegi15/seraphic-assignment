import React from 'react';

const TimelineItem = ({ isComplete, points }) => {
    return (
        <li className={isComplete ? '' : 'not-complete'}>
            <i className={`fa-solid ${isComplete ? 'fa-check' : ''}`} />
            {isComplete && <p>{points} Points</p>}
        </li>
    );
};

export default TimelineItem;



export const CalendarItem = ({ month, date, year, isComplete }) => {
    return (
      <li className={isComplete ? '' : 'not-complete'}>
        <div className='month'>
          <h4>{month}</h4>
        </div>
        <div className='date d-flex align-items-center justify-content-center flex-column py-2'>
          <h4>{date}</h4>
          <p className='m-0'>{year}</p>
        </div>
      </li>
    );
  };