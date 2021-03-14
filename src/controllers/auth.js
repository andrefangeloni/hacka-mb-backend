import Auth from "../db/models/auth"

module.exports = {
  async login(req, res) {
    const results = await Auth.login(req.body.email)

    if(!results.rows[0]) {
      return res.status(400).json({message: "email not registered"})
    }

    if(results.rows[0].str_password !== req.body.password) {
      return res.status(401).json({message: "wrong password"})
    }

    return res.json({userId: `${results.rows[0].id}`})
  },

  async me(req, res) {
    const results = await Auth.me(req.headers.id);

    return res.json(results.rows[0])
  }
}
