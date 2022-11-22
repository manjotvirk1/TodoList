var express=require('express');
const app= express();
var bodyParser=require('body-parser');

var arr=[];

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render("list",{newListItems:arr});
})

app.post("/", function (req, res) {
    const op=req.body.list;
    const itemName = req.body.newItem;
    if(itemName!="")arr.push(itemName);  
    res.redirect("/");
    
});

app.post("/pop",(req,res)=>{
    const index=req.body.index;
    arr.splice(index,1);
    res.redirect("/");
})
app.listen(3000,(req,res)=>{
    console.log("Server running at port 3000");
});
