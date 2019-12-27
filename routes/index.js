// 引入套件
const express = require('express')
const router = express.Router()

/********************************************************************
* POST http://localhost:3000/
********************************************************************/
router.post('/', (req, res) => {
  res.json({
    name: req.body.name
  })
})

/********************************************************************
* GET http://localhost:3000/?name=archer&job=engineer
********************************************************************/
router.get('/', (req, res) => {
  res.send(`name: ${req.query.name}, job: ${req.query.job}`)
})

/********************************************************************
* PUT http://localhost:3000/:id
********************************************************************/
router.put('/:id', (req, res) => {
  res.json({
    id: req.params.id
  })
})

/********************************************************************
* DELETE http://localhost:3000/:id
********************************************************************/
router.delete('/:id', (req, res) => {
  res.json({
    id: req.params.id
  })
})

// 匯出模組
module.exports = router 