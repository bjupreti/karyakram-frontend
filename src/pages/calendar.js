import Layout from "@/components/layout";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

export default function CalendarPage() {
  const handleEventClick = (info) => {
    alert(
      "Event: " +
        info.event.title +
        "\nLater I will show a beautiful description of event."
    );

    // alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
    // alert("View: " + info.view.type);
  };

  return (
    <Layout>
      <div className="calendar-container">
        <FullCalendar
          plugins={[
            listPlugin,
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,listWeek",
          }}
          nowIndicator={true}
          initialView="dayGridMonth"
          editable={true}
          dayMaxEventRows={4}
          selectable={true}
          selectMirror={true}
          eventClick={handleEventClick}
          initialEvents={[
            {
              title: "All Day Event",
              start: "2023-08-01",
            },
            {
              title: "Long Event",
              start: "2023-08-07",
              end: "2023-08-10",
            },
            {
              groupId: 999,
              title: "Repeating Event",
              start: "2023-08-09T16:00:00",
            },
            {
              groupId: 999,
              title: "Repeating Event",
              start: "2023-08-16T16:00:00",
            },
            {
              title: "Conference",
              start: "2023-08-11",
              end: "2023-08-13",
            },
            {
              title: "Meeting",
              start: "2023-08-12T10:30:00",
              end: "2023-08-12T12:30:00",
            },
            {
              title: "Lunch",
              start: "2023-08-12T12:00:00",
            },
            {
              title: "Meeting",
              start: "2023-08-12T14:30:00",
            },
            {
              title: "Happy Hour",
              start: "2023-08-12T17:30:00",
            },
            {
              title: "Dinner",
              start: "2023-08-12T20:00:00",
            },
            {
              title: "Birthday Party",
              start: "2023-08-13T07:00:00",
            },
            {
              title: "Click for Google",
              url: "http://google.com/",
              start: "2023-08-28",
            },
          ]}
        />
      </div>
    </Layout>
  );
}
