var express=require("express")
var fs= require("fs")
var app=express()
// add middle ware function for body parsing

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){

    res.send("hello it is my first express application")

})
app.listen(5002,function(){console.log("server is running on port 5002")})


app.get('/about',function(req,res)
{res.send("This is basic express applicaton")
})
app.get('/users/:userid/:bookid',function(req,res){
    res.send(req.params)

})

app.get('/GetStudents',function (req,res)
 { studentdata={}
  fs.readFile(__dirname + "/" + "Student.json", 'utf8',
function (err, data) { console.log( data );
  res.json({ 'status':true, 'Status_Code':200,
  'requested at': req.localtime, 'requrl':req.url,
  'request Method':req.method, 'studentdata':JSON.parse(
data)});
});
})

