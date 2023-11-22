import express from "express";

const app = express();
const PORT = 4000;

const URLLogger = (req, res, next) => {
    console.log(`Path: ${req.path}`);
    next();
};

const timeLogger = (req, res, next) => {
    const date = new Date();
    console.log(`Time: ${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`);
    next();
};

const securityLogger = (req, res, next) => {
    console.log(req.protocol == "https" ? "Secure" : "Insecure");
    next();
};

const protectorLogger = (req, res, next) => {
    if (req.url == "/protected") {
        return res.redirect("/");
    }
    next();
};

app.use(URLLogger);
app.use(timeLogger);
app.use(securityLogger);
app.use(protectorLogger);
app.get("/", (req, res) => res.send("Welcome to my page!"));
app.get("/protected", (req, res) => res.send("Here is Protected Page"));

app.listen(PORT, () => console.log(`server listening on port http://localhost:${PORT}`));
