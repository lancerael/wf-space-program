import express from 'express'

const app = express()

app.get('/fake-api/:timeout', (req, res) => {
  const t = +req.params.timeout
  const isValid = t < 10000
  setTimeout(() => res.status(isValid ? 200 : 500).send(isValid ? 'Complete!' : 'Failed!'), isValid ? t : 0)
})

export const handler = app