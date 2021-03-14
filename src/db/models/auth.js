import db from "../database"

module.exports = {
  login(email) {
    return db.query(`SELECT str_email, str_password FROM tb_user WHERE str_email = $1`, [email])
  }
}
