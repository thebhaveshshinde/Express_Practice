const express = require("express")
const App = express()
const Players = require("./data/Players.js")
const Peoples = require("./data/Peoples.js")


App.get("/", (req, res) => {
  res.status(200)
    .send("<html><head><style>body{box-sizing:border-box;heigt:100vh;width:100vw;display:flex;justify-content:center;align-items:center;text-align:center;font-size:45px}</style></head><body><h1>Hello Guys!👋</h1></body></html>")
})


App.get("/players", (req, res) => {
  res.status(200)
    .json(Players)
})


App.get("/players/:id", (req, res) => {
  const id = parseInt(req.params.id)
  const FilteredUser = Players.find((Player) => Player.id === id)

  if (FilteredUser) {
     res.status(200)
      .json(FilteredUser)
  }
  else {
    res.status(404)
    .send("<html><head><style>body{box-sizing:border-box;heigt:100vh;width:100vw;display:flex;justify-content:center;align-items:center;text-align:center;font-size:45px}</style></head><body><h1>Player Not Found❌</h1></body></html>")
  }})


App.get("/peoples", (req, res) => {
  res.status(200)
    .json(Peoples)
})


App.get("/peoples/:id", (req , res ) => {
  const ids = parseInt(req.params.id,10)
  const filteredUser = Peoples.find((People) => People.id === ids)

  if(filteredUser){
    res.status(200)
    .json(filteredUser)
  }
  else{
    res.status(404)
    .send("<html><head><style>body{box-sizing:border-box;heigt:100vh;width:100vw;display:flex;justify-content:center;align-items:center;text-align:center;font-size:45px}</style></head><body><h1>Pearson Not Found❌</h1></body></html>")
  }})


App.use((req, res) => {
  res.status(404)
    .send("<html><head><style>body{box-sizing:border-box;heigt:100vh;width:100vw;display:flex;justify-content:center;align-items:center;text-align:center;font-size:45px}</style></head><body><h1>404 Not Found❌</h1></body></html>")
})


App.listen("3000", () => {
  console.log("Server running On the port 3000...")
})