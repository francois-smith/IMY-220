/**
 * Francois Smith u21649988
 */

$(() =>{
    getEvents("events.json");
})

$(window).on("scroll", async function() {
    if($(window).scrollTop() + $(window).height() >= $(document).height()) {
        getEvents("events.json");
    }
});

const getEvents = (url) =>{
    let returnEvents = new Promise((resolve, reject) =>{
        $.getJSON(url)
        .done(data => resolve(data));
    });

    returnEvents.then(data => {
        sortByDate(data);
        let eventCards = data.map((event, index) => createEventCard(event, index));
        $("#eventList").append(eventCards);
    })
}

const sortByDate = (events) =>{
    events.sort((a, b) =>{
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        return dateA - dateB;
    });
}

$(document).on("click", ".form-check-input", (event)=>{
    let radio = $(event.target);
    let correct = radio.closest('.form-check').data('correct');
    radio.parent().parent().find(".alert").remove();

    if(correct){
        radio.parent().parent().append(`<div class="alert alert-success">You are going!</div>`);
    }
    else{
        radio.parent().parent().append(`<div class="alert alert-danger">You will not be attending!</div>`);
    }
});

//Check events as not attending from start because makes most sense on fresh website.
const createEventCard = ({title, description, date, attending}, index) =>`
    <div class="card mb-3">
        <div class="card-header">${title}</div>
        <div class="card-body">
            <p>${description}</p>
            <b>${date}</b>
            <p>Will you be attending?</p>

            <div class="form-check" data-correct="true">
                <input class="form-check-input" type="radio" name="eventAttendance${index+1}" id="event${index+1}Attending1">
                <label class="form-check-label" for="event${index+1}Attending1">
                    Yes
                </label>
            </div>
                
            <div class="form-check" data-correct="false">
                <input checked class="form-check-input" type="radio" name="eventAttendance${index+1}" id="event${index+1}Attending2">
                <label class="form-check-label" for="event${index+1}Attending">
                    No
                </label>
            </div>

            ${attending[1].correct ? `<div class="alert alert-success">You are going!</div>` : `<div class="alert alert-danger">You will not be attending!</div>`}
            
        </div>
    </div>
`;
