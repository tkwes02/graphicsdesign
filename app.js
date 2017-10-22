var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(express.static('public'))


app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");    



var graphics = [
        {name: "Motocycle", image: "https://i.pinimg.com/736x/e8/94/13/e8941350406ed20a3cd3806c42dbeb60--vintage-design-anton.jpg"},
        {name: "Hunan Ku", image: "https://farm6.staticflickr.com/5058/5394269248_0621ff5925_b.jpg"},
         {name: "All Book", image: "https://i.pinimg.com/736x/07/d4/4d/07d44d6a3cd6ade18d0a14847c839817--clever-logo-creative-logo.jpg"}
        ]




app.get("/", function(req, res){
    
    res.render("landing");
});

app.post("/graphics", function(req, res){
    //get data from and add to graphics array
    var name = req.body.name;
    var image = req.body.image;
    var newGraphics = {name: name, image: image};
    graphics.push(newGraphics);
    //redirect back to graphics page
    res.redirect("/graphics");
});


app.get("/graphics/new", function(req, res){
    
    res.render("new.ejs");
});

app.get("/graphics", function(req, res){
    res.render("graphics", {graphics:graphics});
});

app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Dezygn Portfolio server has started");
})
