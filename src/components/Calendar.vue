<template>
  <FullCalendar :options="calendarOptions" ref="calendar" />
</template>
<script>
import FullCalendar from '@fullcalendar/vue'
import dayGridPlugin from '@fullcalendar/daygrid'

export default {
  components: {
    FullCalendar 
  },
  data() {
    return {
      calendarOptions: {
        plugins: [ dayGridPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  },
  mounted() {
      let calendarApi = this.$refs.calendar.getApi()
        calendarApi.addEvent(
        {
          title: 'Golenie jajec', 
          start: '2020-12-01', 
          end: '2020-12-01' 
        },
        )
        calendarApi.addEvent(
        {
          title: 'Golenie jajec', 
          start: '2020-12-01', 
          end: '2020-12-01' 
        },
        )
        calendarApi.addEvent(
        {
          title: 'Golenie jajec', 
          start: '2020-12-01', 
          end: '2020-12-01' 
        },
        )
        calendarApi.addEvent(
        {
          title: 'Golenie jajec', 
          start: '2020-12-11', 
          end: '2020-12-11' 
        },
        )
  }
}
</script>
