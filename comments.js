// var user = [
//     {
//         id: 1,
//         name: 'Thien Tu'
//     },
//     {
//         id: 2,
//         name: 'Son Dang'
//     },
//     {
//         id: 3,
//         name: 'Kien Dam'
//     }
//     //....
// ];

// var comments = [
//     {
//         id: 1,
//         content: 'Anh chua ra video a anh',
//         user_id: 1
//     },
//     {
//         id: 2,
//         content: 'ra roi a',
//         user_id: 2
//     }
// ]
// // tao function get id nguuoi dung 
// function getUserbyId(userID){
//     return new Promise(function(resolve){
//         var results = userID.filter(function(value){
//             return userID.includes(value.id);

//         })
//         resolve(results);
//     })
// }
// // tao ra funtion get comments
// function getcomments() {
//     return new Promise( function(resolve){
//         setTimeout( function () {
//             resolve(comments)
//         },1000);
//     })
// }
// getcomments()
//    .then(function(comments){
//     var userID= comments.map(function(value){
//         return value.user_id;

//     })
//      return getUserbyId(userID)
//        .then(function(use){
//         return{
//             user : use,
//             Comments : comments  
//         }
//        })

//    })
//    .then(function(data){
//      var name = document.getElementById('comment_bolg');
//      var html = '';
//      data.comments.array.forEach(function(value){
//         var user = data.user.find(function(user){
//             return user.id == value.user_id;
//         })
//         html += `<li> ${user.name } : ${value.content}</li>`
//      })
//      name.innerHTML = html
//    })
var users = [
    {
        id: 1,
        name: "Hao"
    },
    {
        id: 2,
        name: "admin"
    }
]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: "xin chào"
    },
    {
        id: 2,
        user_id: 2,
        content: "Xin chào, tôi giúp gì được cho bạn"
    }
]

//Get comment
function getComments() {
    return new Promise(function(resolve) {
        resolve(comments)
    })
}
function getUsersById(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id)
        })
        resolve(result)
    })
}
getComments()
    .then(function(comments) {
        var commentIds = comments.map(function(comment) {
            return comment.user_id
        })

        return getUsersById(commentIds)
            .then(function(users) {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id
            })
            html += `<li>${user.name}: ${comment.content}</li>`
        })
        commentBlock.innerHTML = html; 
    });