import React, { useState } from 'react';
import { Calendar as ReactCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const Calendar = ({ onDateSelected }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleSelect = ({ start }) => {
    setSelectedDate(start);
    onDateSelected(start);
  };

  return (
    <div>
      <h2>Task Calendar</h2>
      <ReactCalendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        defaultDate={selectedDate}
        onSelectSlot={handleSelect}
        selectable
      />
    </div>
  );
};

export default Calendar;