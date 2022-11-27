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
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MicIcon from '@mui/icons-material/Mic';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';

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
  <>
    <SidebarHome />
    <div className="myCustomHeight">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h1>Filtro das Salas</h1>

            <i class="StairsIcon">
            <StairsIcon/>
            </i>
            <input type="text" placeholder="No andar..." />
            <AccessibilityIcon/>
            <input type="text" placeholder="Capacidade da sala" />
            <CalendarMonthIcon/>
            <input type="text" placeholder="Disponível este mês" />
            <MicIcon/>
            <input type="text" placeholder="Pesquisar" />
            <InsertInvitationIcon/>
            <input type="text" placeholder="Sala n°.." />
            <p>Informações do ambiente</p>
          </div>
        </div>
      </div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 800,
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

export default Lab;
