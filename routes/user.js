const express = require("express")

const api = express.Router();

api.get("/user", function (req, res) {
    users= {
        "items": [
          { "id": 1, "fullName": "Luis Batalla",  "country": "ARG" },
          { "id": 2, "fullName": "Carlos Garcia",  "country": "ARG" },
          { "id": 3, "fullName": "Lionel Messi",  "country": "ARG" },
        ] 
      }
      console.log("GET")
      res.send(users)

})


module.exports = api