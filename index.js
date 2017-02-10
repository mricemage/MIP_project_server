var express = require('express')
var app = express()
var cors = require('cors')
 
app.use(cors());

app.set('port', (process.env.PORT || 3000)); // Heroku se tu can chinh port de chay binh thuong

var posts = [
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
     }
];

var getPosts = function()
{
    return posts;
}

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/posts', function (req, res) {
  res.json( getPosts() );
})



app.listen(app.get('port'), function() {
    console.log('Fake Instagram-server is running');
}); 