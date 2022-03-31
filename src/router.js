const express = require('express')
const GradesController = require('./controllers/GradesController')
const PageController = require('./controllers/PageController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const gradesController = new GradesController()

// Routes
router.get('/', gradesController.renderGrades)
router.post('/', gradesController.renderGradesResult)

router.all('*', pageController.renderNotFound)

module.exports = router
