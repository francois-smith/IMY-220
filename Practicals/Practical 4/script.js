$(".col-4").on("click", (event)=>{
    let id = $(event.target).attr("id");
    let index = $(event.target).index();

    let eventPromise1 = getEventHTML(id);
    eventPromise1.then(() => {
        $(".col-4").removeClass("active");
        $(event.target).addClass("active");
    });

    let eventPromise2 = getEventJSON(index);
    eventPromise2.then((data) => {
        let eventDetails = `
            <div class="card">
                <div class="card-body">
                    <p class="card-text">
                        ${data.time}  <br/>
                        ${data.location}  <br/>
                        ${data.weather}  <br/>
                    </p>
                </div>
            </div>
        `;
        $('#event').append(eventDetails);
    });
});

const getEventHTML = (id) =>{
    return new Promise((resolve) => {
        $('#event').load('events.html #'+id)
        .done(resolve());
    });
};

const getEventJSON = (index) =>{
    return new Promise((resolve) => {
        $.getJSON("events.json")
        .done(data => resolve(data[index]));
    });
}