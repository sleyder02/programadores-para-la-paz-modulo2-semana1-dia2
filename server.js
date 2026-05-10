const express = require("express")

const app = express()
const puerto = 3000

app.use(express.text())
app.use(express.static("public"))

app.get("/api/campania", (req, res) => {
  res.send("Campaña: Verifica antes de compartir y participa con respeto.")
})

app.get("/api/avisos", (req, res) => {
  res.send("Aviso comunitario: verifica la fuente, confirma la fecha y usa lenguaje respetuoso.")
})

app.post("/api/propuestas", (req, res) => {
  const propuesta = req.body

  console.log("Propuesta recibida desde el cliente web:")
  console.log(propuesta)

  res.send("Propuesta recibida por la plataforma comunitaria: " + propuesta)
})

app.use((req, res) => {
  res.status(404).send("Ruta no encontrada. Revisa la dirección solicitada.")
})

app.listen(puerto, () => {
  console.log("Servidor Express funcionando en http://localhost:3000")
  console.log("Abre http://localhost:3000 en el navegador.")
})
