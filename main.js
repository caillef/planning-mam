var names = ["Tom", "Lala", "Toto", "Louise", "Lana", "Théophile", "Norah", "Juliette", "Fabien", "Simon", "Thibault", "Frédéric"];
const colors = ["#D00000", "#FFBA08", "#3F88C5"];

function fake_hours(nb_children, start) {
  var list = [];
  for (var i=0; i < nb_children; i++) {
    list.push({
      child: i,
      hour: start + (Math.floor(Math.random()*8) * 0.25)
    });
  }
  return list
}


function displayHours(hours) {
  var div = document.createElement('div');
  hours = hours.sort((n1, n2) => {
    return n1.hour - n2.hour
  })
  
  for (var i=0; i < hours.length; i++) {
    const hour = hours[i];
    var p = document.createElement('p');
      p.innerHTML = names[hour.child] + " " + new Date(hour.hour * 3600 * 1000).toISOString().substr(11, 5);;
      var style="padding: 8px;margin: 0;"
      style += "background: " + colors[(shift + Math.floor(i / 4)) % 3] + ";";
      p.style = style;
      div.appendChild(p);
  }
  return div
}

function displayEndHours(hours) {   
  var div = document.createElement('div');
  hours = hours.sort((n1, n2) => {
    return n1.hour - n2.hour
  })
  
  for (var i=0; i < hours.length; i++) {
    const hour = hours[i];
    var p = document.createElement('p');
      p.innerHTML = names[hour.child] + " " + new Date(hour.hour * 3600 * 1000).toISOString().substr(11, 5);
      var style="padding: 8px;margin: 0;"
      style += "background: " + colors[(shift + (2 - Math.floor((hours.length - i - 1) / 4))) % 3] + ";";
      p.style = style
      div.appendChild(p);
  }
  return div
}                

function make_week() {
  const week = document.createElement('div');   

  const name_days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"]
  for (var i = 0; i < 5; i++) {
    const nb_children = 8 + Math.floor(Math.random()*4);
    const start_hours = fake_hours(nb_children, 8);
    const end_hours = fake_hours(nb_children, 17);

    const day = document.createElement('div')
    const name = document.createElement('h1');
    name.innerHTML = name_days[i];
    name.style="text-align: center";
    day.appendChild(name)
    day.style="display: inline-block;margin:2px;vertical-align:top;";
    day.appendChild(displayHours(start_hours))
    var midi = document.createElement('p');
    if (nb_children <= 8) {
      midi.innerHTML = "Départ 13h30"
      midi.style="background: " + colors[shift] + ";";
      day.appendChild(midi)
      var midi2 = document.createElement('p');
      midi2.innerHTML = "Arrivée 13h30"
      midi2.style="background: " + colors[(shift + 2) % 3] + ";";
      day.appendChild(midi2)
    } else {
      day.appendChild(midi);
    }
    day.appendChild(displayEndHours(end_hours))
    week.appendChild(day);
  }
  return week;
}

var shift = 0;
function make_month() {
  var month = document.createElement('div')
  for (var i = 0; i < 5; i++) {
    month.appendChild(make_week());
    shift += 1;
  }
  return month;
}

const month = make_month();
document.body.appendChild(month) 
