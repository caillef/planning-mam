const colorsClass = ['first', 'second', 'third']

var DayPart = {
  template: '#day-part-template',
  props: {
    children: {},
    isMorning: true,
    index: 0,
  },
  methods: {
    parseHour: str => parseInt(str) + "h" + ("00" + Math.floor(((parseFloat(str)) * 100 % 100 / 100) * 60)).slice(-2)
  },
  computed: {
    children_start: function() {
      return this.children.slice().sort((n1,n2) => n1.start - n2.start).map((e,i) => {
        e.am = colorsClass[(Math.floor(i / 4) + this.index) % 3]
        return e;
      })
    },
    children_end: function() {
      return this.children.slice().sort((n1,n2) => n1.end - n2.end).map((e,i) => {
        e.am = colorsClass[(Math.floor(this.children.lengthi / 4) + this.index) % 3]
        return e;
      })
    }
  }
}

var DayMidday = {
  template: '#day-midday-template',
  props: {
    children: {},
    index: 0
  }
}

var Day = {
  template: '#day-template',
  components: {
    'morning': DayPart,
    'midday': DayMidday,
    'afternoon': DayPart
  },
  props: {
    children: {},
    index: 0
  }
}

var Week = {
  template: '#week-template',
  components: {
    'day-component': Day
  },
  props: {
    days: {},
    index: 0
  }
}

var Month = {
  components: {
    'week': Week
  },
  data: function() {
    return {
      days: []
    }
  },
  template: '#month-template',
  created () {
    fetch("/api/v1/planning")
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.days = json.days
      })
  },
  computed: {
    weeks: function() {
      var weeks = [];
      var week = [];
      for (d in this.days) {
        const day = this.days[d]
        if (day.child_days.length == 0) {
          if (week.length > 0)
            weeks.push(week)
          week = [];
          continue;
        }
        week.push(day);
      }
      weeks.push(week)
      return weeks
    }
  }
}

var app = new Vue({
  el: '#app',
  components: {
    'month': Month
  }
})