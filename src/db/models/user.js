import db from "../database"

module.exports = {
  getAll() {
    return db.query(`SELECT * FROM tb_user`)
  },

  getById(id) {
    return db.query(`SELECT * FROM tb_user WHERE id = $1`, [id])
  },

  create(user) {
    const query = `
      INSERT INTO tb_user (
        str_name,
        str_email,
        str_password,
        int_occupation_area,
        int_senority_level,
        int_technology,
        int_technology_level
      )VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `

    const values = [
      user.name,
      user.email,
      user.password,
      user.occupation_area,
      user.senority_level,
      user.technology,
      user.technology_level
    ]

    return db.query(query, values)
  },

  updateById(id, user) {
    const query = `
      INSERT INTO tb_user (
        str_name,
        str_email,
        str_password,
        int_occupation_area,
        int_senority_level,
        int_technology,
        int_technology_level
      )VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING id
    `

    const values = [
      user.name,
      user.email,
      user.password,
      user.occupation_area,
      user.senority_level,
      user.technology,
      user.technology_level
    ]

    return db.query(query, values)
  },
}
