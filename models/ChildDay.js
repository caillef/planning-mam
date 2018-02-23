class ChildDay {
    constructor(name, day, start, end) {
        this.name = name
        this.day = day
        this.start = start
        this.end = end
    }

    getName() {
        return this.name;
    }

    getDay() {
        return this.day;
    }

    getStart() {
        return this.start;
    }

    getEnd() {
        return this.end;
    }

    dump() {
        console.log(this.day + " " + this.start + " -> " + this.end)
    }
}

module.exports = ChildDay;