const express = require("express");

const app=express();

app.get("/Home",function(req,res){
    res.send("Hello")
});



app.get("/books",function(req,res){
    var Books = [
        {title: 'Lolita', id: 1},
        {title: 'Brave New World', id: 2},
        {title: 'War and Peace', id: 3}
        ]
    res.send(Books);
});
 
app.listen(4000,()=>{
    console.log("Listening on port 4000")
})