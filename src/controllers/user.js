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
    const results = await User.create(req.body)

    return res.json({ userId: `${results.rows[0].id}` })
  },

  async updateById(req, res) {
    const results = await User.updateById(req.params.id, req.body)

    return res.json({ userId: `${results.rows[0].id}` })
  }
}
