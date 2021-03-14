import db from "../database"

module.exports = {
  login(email) {
    return db.query(`SELECT id, str_email, str_password FROM tb_user WHERE str_email = $1`, [email])
  },

  me(id) {
    return db.query(`
      SELECT *, tt.*, ts.*
      FROM tb_user
      INNER JOIN tb_user_technological_goals tt ON tt.id_user = tb_user.id
      INNER JOIN tb_user_soft_skills_goals ts ON ts.id_user = tb_user.id
      WHERE tb_user.id = $1`, [id]
    )
  }
}
