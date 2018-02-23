const ChildDay = require('./ChildDay')

class ChildMonth {
    constructor(month_nb, child_name, am) {
        this.child_name = child_name;
        this.month_nb = month_nb;
        this.am = am;
        this.days = {};
    }

    addDay(day, start, end) {
        this.days["d" + day] = new ChildDay(this.child_name, day, start, end);
    }

    getDays() { return this.days }
    getDay(day) { return this.days["d" + day] }
    getName() { return this.child_name }
    getMonth() { return this.month_nb }
    getAm() { return this.am }

    showDays() {
        console.log("Planning of " + this.child_name + " of month " + this.month_nb + " :")
        for (var key in this.days) {
            const day = this.days[key]
            day.dump();
        }
    }
}

module.exports = ChildMonth;