import SoftSkillGoal from "../db/models/soft-skill-goal"

module.exports = {
  async getAllById(req, res) {
    const results = await SoftSkillGoal.getAll(req.headers.id)

    return res.json(results.rows)
  },

  async updateCompleteById(req, res) {
    await SoftSkillGoal.updateById(req.params.id, req.body)

    return res.json({message: "update success"})
  }
}
