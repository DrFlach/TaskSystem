import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const TaskCalendar = ({ tasks, onSelect }) => {
  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Convert tasks to events for the calendar
    const taskEvents = tasks.map(task => ({
      id: task.id,
      title: task.title,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate),
    }));

    setEvents(taskEvents);
  }, [tasks]);

  const handleSelectEvent = event => {
    const selectedTask = tasks.find(task => task.id === event.id);
    onSelect(selectedTask);
  };

  return (
    <div style={{ height: '600px' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
};

export default TaskCalendar;





