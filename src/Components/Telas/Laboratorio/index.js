import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";


import "react-big-calendar/lib/css/react-big-calendar.css"


const locales = {
  "pt-BR": require("date-fns/locale/pt-BR"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2021, 6, 0),
      end: new Date(2021, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
  },
];

const Lab = (props) => (
  <div className="myCustomHeight">
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px" }}
      messages={{
        month: 'Mes',
        day: 'Dia',
        week:'Semana',
        agenda:'Minha Agenda',
        today:'Hoje',
        next:'Proximo mes',
        time:'',
        previous:'Mes Anterior',
        
      }}
    />
  </div>
)

export default Lab;