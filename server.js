import app from "./src/app.js";
// para usar corretamente, usar a lib dotenv
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
