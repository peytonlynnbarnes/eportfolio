import express from "express";
const app = express();

app.get("/projects", (req, res) => {
    res.send("Server is ready");
});

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000 ");
});



