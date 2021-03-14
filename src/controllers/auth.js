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
    const me = await Auth.me(req.headers.id);
    const meSoftSkills = await Auth.meSoftSkills(req.headers.id);
    const meTechSkills = await Auth.meTechSkills(req.headers.id);

    const results = [me.rows[0], meSoftSkills.rows, meTechSkills.rows]

    return res.json(results)
  }
}
