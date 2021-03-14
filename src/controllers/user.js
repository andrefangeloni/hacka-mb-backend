import User from "../db/models/user"

module.exports = {
  async getAll(req, res) {
    const results = await User.getAll()

    return res.json(results.rows)
  },

  async getById(req, res) {
    const results = await User.getById(req.params.id);

    return res.json(results.rows[0])
  },

  async create(req, res) {
    const emailInUse = await User.emailInUse(req.body.email)

    if(emailInUse.rows[0]) {
      return res.status(401).json({message: "email in use"})
    }

    const results = await User.create(req.body)

    return res.json({ userId: `${results.rows[0].id}` })
  },

  async updateById(req, res) {
    await User.updateById(req.headers.id, req.body)

    return res.json({ message: "user update success" })
  },

  async updateAndCreateGoals(req, res) {
    await User.updateAndCreateGoals(req.headers.id, req.body)

    return res.json({ message: "user update and create goals success" })
  },

  async delete(req, res) {
    await User.delete(req.body.id)

    return res.json({ message: "user delete success" })
  }
}
