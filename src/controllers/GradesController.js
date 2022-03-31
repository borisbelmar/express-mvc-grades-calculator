class GradesController {
  constructor () {
    this.renderGradesResult = this.renderGradesResult.bind(this)
  }

  calculateAverage (grades) {
    return grades.reduce((acc, grade) => acc + grade, 0) / grades.length
  }

  renderGrades (req, res) {
    res.render('grades')
  }

  renderGradesResult (req, res) {
    console.log('req.body', req.body)
    const { maths, chemistry, physics } = req.body

    const grades = [
      parseInt(maths),
      parseInt(chemistry),
      parseInt(physics)
    ]

    const average = this.calculateAverage(grades)

    res.render('grades', {
      maths,
      chemistry,
      physics,
      average
    })
  }
}

module.exports = GradesController
