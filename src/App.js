import React, { useState } from 'react';
import './App.css';

function BirthdayReminder() {
  const [birthdays, setBirthday] = useState([
    { id: 1, name: 'John Smith', date: '01/01/1990' },
    { id: 2, name: 'Jane Doe', date: '02/02/1995' },
    { id: 3, name: 'Bob Johnson', date: '03/03/1985' },
    { id: 4, name: 'John Smith', date: '01/01/1990' },
    { id: 5, name: 'Jane Doe', date: '02/02/1995' },
    { id: 6, name: 'Bob Johnson', date: '03/03/1985' },
  ]);

  const handleDelete = (id) => {
    const updatedBirthdays = birthdays.filter((birthday) => birthday.id !== id);
    setBirthday(updatedBirthdays);
  };

  return (
    <div className="birthday-container">
      <h1>Birthday Reminder</h1>
      <div className="box">
        {birthdays.map((birthday) => (
          <div key={birthday.id} className="items">
            <div className="birthday">
              <p className="name">{birthday.name}</p>
              <p className="date">{birthday.date}</p>
              <button onClick={() => handleDelete(birthday.id)} className="delete-button">Delete</button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BirthdayReminder;