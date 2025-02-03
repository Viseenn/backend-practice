import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page!</h1>");
})

app.post("/register", (req, res) => {
    res.sendStatus(210);
})

app.put("/user/admin", (req, res) => {
    res.sendStatus(200);
})

app.patch("/user/admin", (req, res) => {
    res.sendStatus(200);
})

app.delete("/user/admin", (req, res) => {
    res.sendStatus(200);
})

app.listen(port, () => {
    console.log(`Server ${port}`);
});