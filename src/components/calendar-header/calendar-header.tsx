import React from 'react';

import './calendar-header.css';
import CalendarHeaderController from '../calendar-header-сontroller/calendar-header-controller';
import CalendarHeaderClock from '../calendar-header-clock';
import CalendarHeaderDay from '../calendar-header-date';

const CalendarHeader = () => (
  <div className="calendar-header">
    <CalendarHeaderController />
    <CalendarHeaderDay />
    <CalendarHeaderClock />
  </div>
);
export default CalendarHeader;
