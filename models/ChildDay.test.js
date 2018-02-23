import test from 'ava';
const ChildDay = require('./ChildDay')

test('Getters', t => {
	const child = new ChildDay("Louise", 3, "8h", "17h");
	if (child.getName() == "Louise" && child.getDay() == 3 && child.getStart() == "8h" && child.getEnd() == "17h")
		t.pass();
	else
		t.fail();
});