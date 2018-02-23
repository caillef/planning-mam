import test from 'ava';
const MergedPlanningMonth = require('./MergedPlanningMonth')

test('Merge planning', t => {
	const planning = new MergedPlanningMonth();
	const day = planning.getDay(1);
	t.log(JSON.stringify(day))
	if (day.getChildrenCount() == 12)
		t.pass();
	else
		t.fail();
});
