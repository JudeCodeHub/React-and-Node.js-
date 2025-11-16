import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())

let quotes = [];
let id = 1;

//test api
app.get("/", (req,res) => {
  res.send("hello");
})

// Get all quotes
app.get("/api/quotes", (req,res) => {
  res.json(quotes);
})

//post a new quote
app.post("/api/quotes", (req,res) => {
  const {text} =  req.body;
  const  newQuotes = {id: id++, text};
  quotes.push(newQuotes);
  res.status(201).json(newQuotes);
})


//put (update a quote)
app.put("/api/quotes/:id", (req, res) => {
  const quoteId = parseInt(req.params.id);
  const {text} = req.body;
  const quote = quotes.find(q => q.id === quoteId);
  if(quote){
    quote.text = text
    res.json(quote);
  }else{
    res.status(404).json({error: `Quote not found`});
  }
})


//delete a quote
app.delete("/api/quotes/:id", (req,res) => {
    const quoteId = parseInt(req.params.id);
    quotes = quotes.filter(q => q.id !== quoteId)
    res.status(204).sent("Deleted Successfully");
})



app.listen(PORT, () => console.log(` server is running on http://localhost:${PORT} `));