import TechnologyGoal from "../db/models/technology-goal"

module.exports = {
  async getAllById(req, res) {
    const results = await TechnologyGoal.getAll(req.headers.id)

    return res.json(results.rows)
  },

  async updateCompleteById(req, res) {
    const results = await TechnologyGoal.updateById(req.params.id, req.body)

    return res.json(results.rows)
  }
}
