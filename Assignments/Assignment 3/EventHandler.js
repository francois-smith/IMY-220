class EventHandler {
    constructor(events) {
        this.events = events;
    }

    getEventsBetweenDates(startDate, endDate){
        return events.filter(function(event){
            return new Date(event.dateStart) >= new Date(startDate) && new Date(event.dateEnd) <= new Date(endDate);
        });
    }

    getByMonth(month){
        return events.filter(function(event){
            return new Date(event.dateStart).getMonth() == month;
        });
    }

    getUniqueDateAndSort(){
        return events.sort(
            (event1, event2) => new Date(event1.dateStart).getMonth() - new Date(event2.dateStart).getMonth()
        ).filter(function(value, index, self) {
            return self.findIndex(event => event.dateEnd === value.dateEnd) === index;
        });
    }

    getSummary(){  
        
    }
}