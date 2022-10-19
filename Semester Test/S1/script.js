// 51_Smith

/**
 Write a function called getUserDetails which receives two parameters: the name of a 
file and an array of user IDs. The function will be used to read a JSON file and return 
an array of user details from this file (you may assume that the format will always be 
similar to that found in users.json). If an array of user IDs is supplied in the function (4) 
 2 
 
parameters, it must only return the details for the users whose IDs match those 
given. If no array of user IDs are supplied to the function, it must simply return the 
details for all users listed in the file name given. You must use a default parameter to 
accomplish this. 
Jquery
 */

const getUserDetails = (fileName, userIds = []) => {
    $.ajax({
        url: fileName,
        dataType: 'json',
        success: function (data) {
            if(userIds.length === 0){
                return data;
            } 
            else{
                return data.filter(user => userIds.includes(user.id));
            }
        }
    });
};


$(() => {
    console.log(getUserDetails('users.json'));
    console.log(getUserDetails('users.json', [1, 2, 3]));
});

/**
 Write a function called getFriendList which receives two parameters: the name of a 
file and a single user ID. The function will be used to read a JSON file and return an 
array containing the list of user IDs that correspond with that of the given user (you 
may assume that the format will always be similar to that found in friends.json). 
 */