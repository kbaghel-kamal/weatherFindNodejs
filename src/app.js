const express=require('express');
const path=require('path');
const app=express();
const port='8000';
const hbs=require('hbs');



const filePath=path.join(__dirname,"../public");
const partilasPath=path.join(__dirname,"../templatess/partials");
const viewsPath=path.join(__dirname,"../templatess/views");


console.log(partilasPath);


app.set('views',viewsPath);
app.set('view engine','hbs');
hbs.registerPartials(partilasPath);




app.use(express.static(filePath));

app.get("/",(req,res)=>{
  res.render("index");
});
app.get("/about",(req,res)=>{
  res.render("about");

  });
  app.get("/weather",(req,res)=>{
    res.render("weather");
  });
  app.get("/*",(req,res)=>{
    res.render("error");
  });

app.listen(port,()=>{
    console.log(`Listening to the port ${port}`);
});