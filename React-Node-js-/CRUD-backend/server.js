import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define a model

const quoteSchema = mongoose.Schema({
  text:{
    type : String,
    required: true,
    trim:true,
    minlength:1,
  }
},  {timestamps:true});

const Quote = mongoose.model("Quote", quoteSchema);

//test api
app.get("/", (req,res) => {
  res.send("Hello guys")
})

//get all quotes
app.get("/api/quotes", async (req,res) => {
  try {
    const quotes = await Quote.find().sort({createdAt:-1});
    res.json(quotes);
  } catch (error) {
    res.status(500).json({error:"falied to fetch"});
  }
})

//post a new quotes
app.post("/api/quotes", async (req,res) => {
  try {
    const {text} = req.body;
    if(!text || text.trim().length===0){
      return res.status(400).json({error:"Quote text is required"});
    }
    const created = await Quote.create({text:text.trim()});
    res.status(201).json(created);
  } catch (error) {
    res.status(500).json({error:"falied to create quote"});
  }
})


//update a quote
app.put("/api/quotes/:id", async (req,res) => {
  try {
    const {id} = req.params;
    const {text} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({error:"Invalid quote id"});
    }

    if(!text || text.trim().length===0){
      return res.status(400).json({error:"Quote text is required"});
    }
    const updated = await Quote.findByIdAndUpdate(id, {text:text.trim()}, {new:true});

    if(!updated){
      return res.status(404).json({error:"Quote not found"});
    }
    res.json(updated);
    
  } catch (error) {
    res.status(500).json({error:"falied to update a quote"});
  }
})


//delete a quote
app.delete("/api/quotes/:id", async (req,res) => {
  try {
    const {id} = req.params;
    

    if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({error:"Invalid quote id"});
    }

    
    const deleted = await Quote.findByIdAndDelete(id);

    if(!deleted){
      return res.status(404).json({error:"Quote not found"});
    }
    res.status(204).end();
    
  } catch (error) {
    res.status(500).json({error:"falied to delete a quote"});
  }
})



//connect to mongo db
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected..!"))
  .catch((err) => {
    console.error(`MongoDB Connection error:  ${err.message}`);
    process.exit(1);
  })

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })