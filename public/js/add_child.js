var Day = {
  template: '#day-template',
  props: {
    day: {}
  },
  // methods: {
  //   // No argument
  //   dateStartChangeHandler (eventData, day) {
  //     // eventData -> {data: {HH:..., mm:...}}
  //     console.log(eventData.data.HH);
  //     const id = weeks[0].indexOf(day);
  //     if (id !== -1) {
  //       weeks.forEach(e => {
  //         e.forEach((day,i) => {
  //           day.start_time = {HH: eventData.data.HH, mm: eventData.data.mm }
  //           console.log(day.day + " " + JSON.stringify(day.start_time))
  //         })
  //       })  
  //     }
  //   },
  
  //   // Customized arguments
  //   dateEndChangeHandler (eventData) {
  //     console.log(eventData);
  //   }
  // }
}

var Month = {
  template: '#month-template',
  components: {
    'day': Day
  },
  props: {
    weeks: undefined
  }
}

var weeks = [[{day: "Lundi"},{day: "Mardi"},{day: "Mercredi"},{day: "Jeudi 1"},{day: "Vendredi 2"}],
[{day: "Lundi 5"},{day: "Mardi 6"},{day: "Mercredi 7"},{day: "Jeudi 8"},{day: "Vendredi 9"}],
[{day: "Lundi 12"},{day: "Mardi 13"},{day: "Mercredi 14"},{day: "Jeudi 15"},{day: "Vendredi 16"}],
[{day: "Lundi 19"},{day: "Mardi 20"},{day: "Mercredi 21"},{day: "Jeudi 22"},{day: "Vendredi 23"}],
[{day: "Lundi 26"},{day: "Mardi 27"},{day: "Mercredi 28"},{day: "Jeudi"},{day: "Vendredi"}]];

var app = new Vue({
  el: '#app',
  data: function() {
    return {
      weeks: weeks
    }
  },
  components: {
    'month': Month
  }
})