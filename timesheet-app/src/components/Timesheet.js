import React, { useState } from 'react';

const Timesheet = () => {
  const [weekHours, setWeekHours] = useState([]);

  const handleInputChange = (day, event) => {
    const updatedWeekHours = [...weekHours];
    updatedWeekHours[day] = event.target.value;
    setWeekHours(updatedWeekHours);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to save the updated time sheet data
    console.log(weekHours);
  };

  return (
    <div>
      <h1>Time Sheet</h1>
      <form onSubmit={handleSubmit}>
        <label>Monday:</label>
        <input
          type="text"
          value={weekHours[0] || ''}
          onChange={(event) => handleInputChange(0, event)}
        />
        <br />
        <label>Tuesday:</label>
        <input
          type="text"
          value={weekHours[1] || ''}
          onChange={(event) => handleInputChange(1, event)}
        />
        <br />
        <label>Wednesday:</label>
        <input
          type="text"
          value={weekHours[2] || ''}
          onChange={(event) => handleInputChange(2, event)}
        />
        <br />
        <label>Thursday:</label>
        <input
          type="text"
          value={weekHours[3] || ''}
          onChange={(event) => handleInputChange(3, event)}
        />
        <br />
        <label>Friday:</label>
        <input
          type="text"
          value={weekHours[4] || ''}
          onChange={(event) => handleInputChange(4, event)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Timesheet;
