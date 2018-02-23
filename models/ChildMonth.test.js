import test from 'ava';
const ChildMonth = require('./ChildMonth')

test('Get days', t => {
	const planning = new ChildMonth(2, "Louise");
	const data = JSON.parse("{\"d1\":{\"name\":\"Louise\",\"day\":\"1\",\"start\":\"8\",\"end\":\"17\"},\"d2\":{\"name\":\"Louise\",\"day\":\"2\",\"start\":\"9\",\"end\":\"17\"}}")
	for (var key in data) {
		planning.addDay(data[key].day, data[key].start, data[key].end)
	}
	const days = planning.getDays();
	t.log(JSON.stringify(days))
	if (days.d1.getName() == "Louise" && days.d2.getStart() == 9 && days.d3 === undefined)
		t.pass();
	else
		t.fail();
});


test('Get day', t => {
	const planning = new ChildMonth(4, "Théo");
	const data = JSON.parse("{\"d1\":{\"name\":\"Louise\",\"day\":\"1\",\"start\":\"8\",\"end\":\"17\"},\"d2\":{\"name\":\"Louise\",\"day\":\"2\",\"start\":\"9\",\"end\":\"17\"}}")
	for (var key in data) {
		planning.addDay(data[key].day, data[key].start, data[key].end)
	}
	const day = planning.getDay("2");
	if (day.getName() == "Théo" && day.getStart() == 9 && day.getEnd() == 17)
		t.pass();
	else
		t.fail();
});