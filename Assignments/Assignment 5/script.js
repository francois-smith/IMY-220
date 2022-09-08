$(() =>{
    getEvents("events.json");
})

const getEvents = (url) =>{
    let returnEvents = new Promise((resolve, reject) =>{
        $.getJSON(url)
        .done(data => resolve(data));
    });

    returnEvents.then(data => {
        sortByDate(data);
        let eventCards = data.map((event, index) => createEventCard(event, index));
        $("#events").append(eventCards);
    })
}

const sortByDate = (events) =>{
    events.sort((a, b) =>{
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA - dateB;
    });
}

const createEventCard = ({title, description, date, attending}, index) =>`
    <div class="card mb-3">
        <div class="card-header">${title}</div>
        <div class="card-body">
            <p>${description}</p>
            <b>${date}</b>
            <p>Will you be attending?</p>
            <div class="form-check" data-correct="true">
                <input class="form-check-input" type="radio" name="eventAttendance${index}" id="event1Attending${index}">
                <label class="form-check-label" for="event1Attending${index}">
                    Yes
                </label>
            </div>
                
            <div class="form-check" data-correct="false">
                <input class="form-check-input" type="radio" name="eventAttendance1" id="event1Attending2">
                <label class="form-check-label" for="event1Attending2">
                    No
                </label>
            </div>

        </div>
    </div>
`;
