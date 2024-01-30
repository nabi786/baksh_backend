const express = require("express")
const app = express()
const PORT = 3000;
const cors = require("cors")



app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors())

// Routes
app.use(require("./routes/contact"))

app.get("/", (req,res)=>{
    res.status(200).json({msg : "Baksh app is working correctly"})
})


app.get("*", (req,res)=>{
    res.status(404).json({msg : "No Route found"})
})




app.listen(PORT, ()=>{
    console.log(`the app is running on this url http://localhost:${PORT}/`)
})