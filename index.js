var express = require('express')
var app = express()
var cors = require('cors')
 
app.use(cors());

app.set('port', (process.env.PORT || 3000)); // Heroku se tu can chinh port de chay binh thuong

var home = [
    { //bai post dau tien gom 2 comment cua user 2 va 3
        id: 0,
        user:{
            id: 1,
            name: "Pham Huong",
            avatar: "img/img1.jpg"
        },
        img: "img/img2.jpg",
        like: 3,
        caption: "Stay classy",
        comment:[
            {
                id: 0,
                user:{
                    id: 2,
                    name: "Boe Nguyen",
                    avatar: "img/img7.jpg"
                },
                content: "corn cake dm ml ccc"
            },
            {
                id: 1,
                user:{
                    id: 3,
                    name: "Smith Wesley",
                    avatar: "img/img5.jpg"
                },
                content: "Doe moe"
            }
        ]
    },
    //bai post thu hai gom 1 comment cua user 4

     {
         id: 1,
         user:{
             id: 2,
             name: "Boe Nguyen",
             avatar: "img/img7.jpg"
         },
         img: "img/img3.jpg",
         like: 8,
         caption: "Words cannot express my love & passion",
         comment:[
             {
                 id: 0,
                 user:{
                     id: 4,
                     name: "Thang Ho",
                     avatar: "img/img6.jpg"
                 },
                 content: "SML moe chuminga"
             }
         ]
     },
      //bai post thu ba gom 2 comment cua user 1 va 5
      {
         id: 2,
         user:{
             id: 3,
             name: "Smith Wesley",
             avatar: "img/img5.jpg"
         },
         img: "img/img8.jpg",
         like: 2,
         caption: "You’re cute, can I have you?",
         comment:[
             {
                 id: 0,
                 user:{
                     id: 1,
                     name: "Pham Huong",
                     avatar: "img/img1.jpg"
                 },
                 content:"Oh, Bonny not gonna like this"
             },
             {
                 id: 1,
                 user:{
                     id: 5,
                     name: "Jane Ionic",
                     avatar: "img/img9.jpg"
                 },
                 content: "Oops"
             }
         ]
     },
      //bai post thu tu gom 0 comment 
     {
         id: 3,
         user:{
             id: 4,
             name: "Thangg Ho",
             avatar: "img/img6.jpg"
         },
         img: "img/img10.jpg",
         like: 9,
         caption: "Today I have a good memory",
         comment:[]
         
     }
];
// Kết thúc phần DataService được up lên server.

var personal = {
        id:1,
        avatar: "img/img1.jpg",
        name: "Pham Huong",
        website: "",
        bio: "So I just started Instagram. But be warned! I will take pictures of funny and maybe disturbing contents of things. Follow me if you dare! Or you can just follow me to make me feel cool",
        email: "boe.pham@bee.com",
        mobile: "013583644",
        posts: "2",
        followers: "77",
        following: "235"
    }

// Phần dữ liệu từ .factory('Personal')

var allPerson = [
    {
    id: 0,
    name: "Angela Huynh",
    avatar: "img/img8.jpg",
    bio:"Bao gio lay chong moe",
    posts: "2",
    followers: "12",
    following: "22",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg" }
    },
{
    id: 1,
    name: "Sam Smith",
    avatar: "img/img7.jpg",
    bio: "I didn’t choose the thug life, the thug life chose me",
    posts: "2",
    followers: "12",
    following: "22",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
    },

{
    id: 2,
    name: "Boe Pham",
    avatar: "img/img7.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "2",
    followers: "99",
    following: "2000",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
    },
{
    id: 3,
    name: "Thang Ho",
    avatar: "img/img6.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "2",
    followers: "55",
    following: "88",
    uploadPost: {
        img1:"img/img10.jpg",
        img2:"img/img8.jpg"
    }
},
{
    id: 4,
    name: "Jane Ionic",
    avatar: "img/img7.jpg",
    bio:"I’m truly a monster cupcake. Anxious about thrill rides and dry ice",
    posts: "1",
    followers: "492",
    following: "224",
    uploadPost: {
        img1:"img/img10.jpg"
    }
}
];

//Phần dữ liệu từ .factory('allPerson')


var getHome = function() // Dành cho getPost | thuộc về phần DataService
{
    return home;    //Home nằm ở trên ^^
}

var getPersonal = function() // Dành cho getInfo | thuộc về phần Personal
{
    return personal; //personal nằm ở trên
}

var getallPerson = function() // Dành cho getallPerson | thuộc về phần allPerson
{
    return allPerson; // allPerson nằm ở trên
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/home', function (req, res) { //Liên quan đến mấy bài post ở Home
  res.json( getHome() );
})

app.get('/personal', function (req, res) { // Lien quan đến mấy bài post ở Profile
  res.json( getPersonal() );
})

app.get('/allPerson', function (req, res) { // Lien quan đến mấy bài post ở Profile
  res.json( getallPerson() );
})



app.listen(app.get('port'), function() {
    console.log('Fake Instagram-server is running');
}); 