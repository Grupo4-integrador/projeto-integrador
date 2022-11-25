import React from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { ptBR } from "date-fns/locale";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import SidebarHome from "../../SideBar/index";

import "react-big-calendar/lib/css/react-big-calendar.css";

const messages = {
  allDay: "Dia Inteiro",
  previous: "<",
  next: ">",
  today: "Hoje",
  month: "Mês",
  week: "Semana",
  day: "Dia",
  agenda: "Agenda",
  date: "Data",
  time: "Hora",
  event: "Evento",
};

const locales = {
  "pt-BR": ptBR,
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
    <SidebarHome />
    <Calendar
      eventPropGetter={(event) => {
        return {
          style: {
            backgroundColor: "#3f51b5",
            borderRadius: "8px",
            minHeight: "10px",
          },
        };
      }}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, margin: "50px", width: "60%", float: "right", boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)" }}
      messages={messages}
      culture={"pt-BR"}
    />
  </div>
);

export default Lab;
