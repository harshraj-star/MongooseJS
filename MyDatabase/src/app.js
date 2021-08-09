const mongoose =require("mongoose");

// Conncetion creation and creating a new Databse if there is not any similar database is present 
mongoose.connect("mongodb://localhost:27017/newDatabase" , {useNewUrlParser: true,useUnifiedTopology: true })
.then(() => console.log("connection successful...."))
.catch((err) => console.log(err));  
// .connect ke andar path , port ,databse name
//localhost:27017/newDatabase : this is our localhost mongodb compass server
// {useNewUrlParser: true,useUnifiedTopology: true } arestring keys which is use to connect mongodb with mongoose
// {useNewUrlParser: true,useUnifiedTopology: true } : they  provide promises that they will store the value in database and will return us value when required

// Now  Schema defintion is mongoose.....

const mySchema = new mongoose.Schema( {
    name: String,
    ctype: String,
    videos: Number,
    author: String,
    active:Boolean,
    date:{
        type: Date,
        default: Date.now

    }
})

// Now Mongoose Model
// Collection creation in Mongoose....

const Playlist = new mongoose.model("Playlist" , mySchema);

// Create documnet or insert

const reactPlaylist =new Playlist({
    name:"React js",
    ctype:"Front End",
    video:100,
    author:"Offcampus Duniya",
    active:true
})

reactPlaylist.save();




