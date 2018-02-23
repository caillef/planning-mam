class MergedDay {
    constructor(child_days) {
        this.child_days = child_days
    }

    getChildrenCount() { return this.child_days.length }

    getStartHours() {
        return this.child_days.map(e => {
            return {
                name: e.getName(), 
                hour: e.getStart()
            }
        })
        .sort((s1, s2) => s1.hour - s2.hour)
    }

    getEndHours() {
        return this.child_days.map(e => {
            return {
                name: e.getName(), 
                hour: e.getEnd()
            }
        })
        .sort((s1, s2) => s1.hour - s2.hour)
    }
}

module.exports = MergedDay