const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

const mid=(req,res,next)=>{
  const{username,password}=req.body
  if(username==="abd" && password==="123"){
    console.log("verified")
    next()
  }
  else{
    res.send("plz try again")
  }
}

app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})
app.post("/farm",mid,(req,res)=>{
  console.log(req.body)
  res.send("form submitted")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
