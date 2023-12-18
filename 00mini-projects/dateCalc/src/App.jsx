import React, { useState } from "react";

export default function App() {
  // state to hold the selected date and error message
  const [selectedDate, setSelectedDate] = useState("");
  const [daysUntilSelectedDate, setDaysUntilSelectedDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // function to handle the date change
  const handleDateChange = (evt) => {
    setSelectedDate(evt.target.value);
    setErrorMessage("");
    setDaysUntilSelectedDate("");
  };

  // function to calculate the number of days from today to selected date
  const calculateDays = () => {
    const today = new Date();
    const futureDate = new Date(selectedDate);
    const timeDiff = futureDate.getTime() - today.getTime();

    if (timeDiff < 0) {
      setErrorMessage(`Error: The picked date is in the past.`);
    } else {
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setDaysUntilSelectedDate(daysDiff);
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-xl rounded">
        <div>
          <input
            type="date"
            id="datePicker"
            value={selectedDate}
            onChange={handleDateChange}
            className="border-2 border-gray-300 p-2 rounded"
          />
        </div>
        <div className="my-4">
          <button
            id="findDays"
            onClick={calculateDays}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Find Days
          </button>
        </div>
        {daysUntilSelectedDate && (
          <div className="text-green-600">
            Days until selected date: <span id="daysLeft">{daysUntilSelectedDate}</span>
          </div>
        )}
        {errorMessage && (
          <div id="error" className="text-red-500">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}
