const next = require('next')
const express = require('express')

const app = next({
  dev: true,
})

const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    // server.get('/profile/:id', async (req, res) => {
    //   const html = await app.renderToHTML(req, res, '/profile', req.params)
    //   res.send(html)
    // })

    server.get('*', (...args) => handle(...args))

    server.listen(3000, err => {
      if (err) throw err
      console.log('Ready on http://localhost:3000')
    })
  })
