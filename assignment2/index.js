import express from "express";

const app = express();

const PORT = 3000;

app.get("/", (req, res) => res.send("<h1>Welcome to my page!</h1>"));
app.get("/about", (req, res) => res.send("<h1>Welcome to my page!</h1><h2>Here is my About page</h2>"));
app.get("/contact", (req, res) => res.send("<h1>Welcome to my page!</h1><h2>Here is my Contact page</h2>"));
app.get("/login", (req, res) => res.send("<h1>Welcome to my page!</h1><h2>Here is my Login page</h2>"));

app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`));
