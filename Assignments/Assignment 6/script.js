//Francois Smith u21649988

$("#submitBtn").on("click", () => {
    let username = $("#username").val();
    let password = $("#password").val();
    
    let profile = getUserInfo(username, password);
    profile.then((data) => {
        $("#loginForm").hide();

        let user = data.user;
        $('<div></div>', {
            html: `<p><b>Hi, </b> ${user.username}</p><p>Here are your upcoming events:</p>`
        })
        .insertBefore(".events");

        let events = data.events;
        $('.events').addClass("row");
        $('.events').html(events.map(EventObject).join(''));
    })
});

let EventObject = ({title, description, date}) => `
    <div class="card col-4">
        <div class="card-body">
            <p class="h4"><b>${title}</b></p>
            <p class="">${description}</p>
            <p class="h5"><b>${date}</b></p>
        </div>
    </div>
`;

let getUserInfo = (username, password) =>{
    return new Promise((resolve, reject) => {
        $.getJSON("users.json")
        .then(users => {
            let user = users.find((user) => user.username === username && user.password === password);
            if(user){
                return user;
            }
            else{
                userNotFound();
            }
        })
        .then(user => {
            $.getJSON("events.json")
            .then(events => {
                events = events.filter(event => event.attending.includes(user.userID));
                resolve({events : events, user : user});
            })
        })
    });
} 

function userNotFound() {
    console.log("User not found");
    throw new Error("User not found");
}
