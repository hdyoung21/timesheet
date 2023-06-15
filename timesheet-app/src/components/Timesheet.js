import React, { useState } from 'react';

const Timesheet = () => {
  const [timeSheet, setTimeSheet] = useState([]);

  const handleInputChange = (employeeIndex, dayIndex, event) => {
    const updatedTimeSheet = [...timeSheet];
    updatedTimeSheet[employeeIndex][dayIndex] = event.target.value;
    setTimeSheet(updatedTimeSheet);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add your logic here to save the updated time sheet data
    console.log(timeSheet);
  };

  const addEmployee = () => {
    const updatedTimeSheet = [...timeSheet];
    updatedTimeSheet.push(new Array(7).fill(''));
    setTimeSheet(updatedTimeSheet);
  };

  const removeEmployee = (employeeIndex) => {
    const updatedTimeSheet = [...timeSheet];
    updatedTimeSheet.splice(employeeIndex, 1);
    setTimeSheet(updatedTimeSheet);
  };

  return (
    <div>
      <h1>Time Sheet</h1>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
          </tr>
        </thead>
        <tbody>
          {timeSheet.map((employee, employeeIndex) => (
            <tr key={employeeIndex}>
              <td>
                <button onClick={() => removeEmployee(employeeIndex)}>
                  Remove
                </button>
              </td>
              {employee.map((hours, dayIndex) => (
                <td key={dayIndex}>
                  <input
                    type="text"
                    value={hours}
                    onChange={(event) =>
                      handleInputChange(employeeIndex, dayIndex, event)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addEmployee}>Add Employee</button>
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Timesheet;
