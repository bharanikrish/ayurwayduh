import app from "./src/app";

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`API running on ${port}`));