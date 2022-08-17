class EventHandler extends Array{
    constructor(events) {
        super();
        this.events = events;
        Array.prototype.getEventsBetweenDates = this.getEventsBetweenDates;
        Array.prototype.getByMonth = this.getByMonth;
        Array.prototype.getUniqueDateAndSort = this.getUniqueDateAndSort;
        Array.prototype.getSummary = this.getSummary;
    }

    getEventsBetweenDates = (startDate, endDate) =>{
        return new EventHandler(events.filter(function(event){
            return new Date(event.dateStart) >= new Date(startDate) && new Date(event.dateEnd) <= new Date(endDate);
        })).events;
    }

    getByMonth = (month) =>{
        return new EventHandler(events.filter(function(event){
            return new Date(event.dateStart).getMonth()+1 === month;
        })).events;
    }

    getUniqueDateAndSort = () =>{
        return new EventHandler(events.sort(
            (event1, event2) => new Date(event1.dateStart).getMonth() - new Date(event2.dateStart).getMonth()
        ).filter(function(value, index, self) {
            return self.findIndex(event => event.dateEnd === value.dateEnd) === index;
        })).events;
    }

    getSummary = (...args) =>{
        if(args.length == 1 && (args[0] instanceof Array || args[0] instanceof Object)){
            return new EventHandler(this.#_map(args[0])).events;
        }
        else if(args.length >= 2 && args instanceof Object){
            return new EventHandler(this.#_map(args)).events;
        }
        else if(args.length == 0){
            return new EventHandler(this.#_map(this.events)).events;
        }
    }

    //Helper Function
    #_map = (array) =>{
        return array.map(function(event){
            if(event.dateStart == event.dateEnd){
                return "On "+event.dateStart+" "+event.name+" ("+event.description+")";
            }
            else
            {
                return "From "+event.dateStart+" to "+event.dateEnd+" "+event.name+" ("+event.description+")";
            }
        });
    }
}