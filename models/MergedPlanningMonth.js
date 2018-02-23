const MergedDay = require('./MergedDay')
const ChildMonth = require('./ChildMonth')

class MergedPlanningMonth {
    constructor(planning_list) {
        if (planning_list === undefined)
            planning_list = this.fakeMonths(12, 3);
        this.list = planning_list
        this.days = {}
        this.merge()
    }

    merge() {
        for (var i = 1; i < 31; i++) {
            this.days["d" + i] = new MergedDay(this.list.map(e => e.getDay(i)).filter(e => e !== undefined));
        }
    }

    getDay(day) { return this.days["d" + day] }

    fakeMonths(nb, MONDAY) {
        var list = [];
        const names = ["Louise", "Théo", "Kevin", "Lola", "Pierre", "Léa", "Marie", "Julie", "Grégoire", "François", "Hervé", "Monique", "Dorian", "Patrick"]
        for (var i = 0; i < nb; i++) {
            const month = new ChildMonth(3, names[i])
            var day = 1;
            var day_in_week = MONDAY;
            while (day_in_week >= 5 && day_in_week < 7) {
                day++;
                day_in_week++;
            }
            if (day_in_week == 7)
                day_in_week = 0;
            while (day < 31) {
                if (Math.random() > 0.3)
                    month.addDay(day, 7 + Math.floor(Math.random() * 8) * 0.25, 16.5 + Math.floor(Math.random() * 8) * 0.25)
                day++;
                day_in_week++;
                if (day_in_week >= 5) {
                    day_in_week = 0;
                    day += 2;
                }
            }
            list.push(month);
        }
        return list;
    }
}

module.exports = MergedPlanningMonth;