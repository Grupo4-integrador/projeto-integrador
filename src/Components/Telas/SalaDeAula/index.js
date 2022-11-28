import React from "react";

import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { ptBR } from "date-fns/locale";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";

import SidebarHome from "../../SideBar/index";
import './index.scss';

import "react-big-calendar/lib/css/react-big-calendar.css";

import StairsIcon from '@mui/icons-material/Stairs';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventIcon from '@mui/icons-material/Event';
import MicIcon from '@mui/icons-material/Mic';
import { Autocomplete } from "@mui/material";

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
    title: "Prof A.",
    allDay: true,
    start: new Date(2022, 10, 0),
    end: new Date(2022, 10, 0),
  },
  {
    title: "Prof. B",
    start: new Date(2022, 10, 7),
    end: new Date(2022, 10, 10),
  },
  {
    title: "Prof. C",
    start: new Date(2022, 10, 20),
    end: new Date(2022, 10, 27),
  },
];

const ClassRoom = (props) => (
  <>
    <div className="myCustomHeight">
    <SidebarHome />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Filtro Salas de Aula</h1>
            <div className="all_filters">
              <span className="filter_input">
                <EventIcon/>
                <input type="text" placeholder="Sala n°...." />
              </span>
              <span className="filter_input">
                <GroupsIcon/>
                <input type="text" placeholder="Capacidade da sala..." />
              </span>
              <span className="filter_input">
                <StairsIcon/>
                <input type="text" placeholder="No andar..." />
              </span>
              <span className="filter_input">
                <CalendarMonthIcon/>
                <input type="text" placeholder="Disponivel este mês..." />
              </span>
              <span className="filter_input">
                <MicIcon/>
                <input type="text" placeholder="Com microfone..." />
              </span>
            </div>
          </div>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 680,
          width: "60%",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
          borderRadius: "10px",
          padding: "20px",
          float: "right",
          marginRight: "20px",
        }}
        messages={messages}
        culture={"pt-BR"}
      />
    </div>
  </>
);

export default ClassRoom;
