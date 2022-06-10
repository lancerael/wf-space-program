import express from 'express'

const app = express()

app.get('/fake-api/:timeout', (req, res) => {
  const t = +req.params.timeout
  setTimeout(() => res.status(t < 10000 ? 200 : 500).send(t < 10000 ? 'Complete!' : 'Failed!'), t < 10000 ? t : 0)
})

export const handler = app