// 51_Smith

// Question 1.1
const getUserDetails = (fileName, userIds = []) => {
    return new Promise((resolve, reject) => {
        $.getJSON(fileName)
        .then(data => {
            if(userIds.length !== 0){
                data = data.filter((user) => {
                    return userIds.includes(user.userid);
                });
            }
            resolve(data);
        });
    });
};

// Question 1.2
const getFriendList = (fileName, userId) => {
    return new Promise((resolve, reject) => {
        $.getJSON(fileName)
        .then(data => {
            let user = data.find((current) => current.user === userId);
            resolve(user.friends);
        });
    });
}

// Question 1.3
const createUserRow = (user) => {
    return $('<tr></tr>', {
        html: `<td>${user.name}</td><td>${user.surname}</td>`
    });
}

// Question 1.4
$(()=>{
    let dropdown = $('.dropdown-menu');
    getUserDetails('users.json')
    .then(users => {
        $.map(users, (user) => {
            dropdown.append($('<a></a>', {
                class: 'dropdown-item',
                text: `${user.name} ${user.surname}`,
                'data-userid': user.userid,
                class: 'dropdown-item',
            }));
        });
    });
})

// Question 1.5
$('.dropdown-menu').on('click', '.dropdown-item', (event)=>{
    let userId = $(event.target).data('userid');
    $('tbody').empty();

    getFriendList('friends.json', userId)
    .then(friends => {
        if(friends.length === 0){
            $('tbody').append(createUserRow({name: 'No friends', surname: ''}));
        } 
        else{
            getUserDetails('users.json', friends)
            .then(users => {
                $.map(users, (user) => {
                    if(user.userid !== userId){
                        $('tbody').append(createUserRow(user));
                    }
                });
            });
        }
    });
});
