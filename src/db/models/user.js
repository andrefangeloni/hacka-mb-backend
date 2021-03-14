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
        str_password
      )VALUES ($1, $2, $3)
      RETURNING id
    `

    const values = [
      user.name,
      user.email,
      user.password
    ]

    return db.query(query, values)
  },

  updateById(user) {
    const query = `
      UPDATE tb_user SET
        str_name=($1),
        str_email=($2),
        str_password=($3),
        int_occupation_area=($4),
        int_senority_level=($5),
        int_technology=($6),
        int_technology_level=($7)
      WHERE id = $8
    `

    const values = [
      user.name,
      user.email,
      user.password,
      user.occupation_area,
      user.senority_level,
      user.technology,
      user.technology_level,
      user.id
    ]

    return db.query(query, values)
  },

  updateByIdCreate(user) {
    const query = `
      UPDATE tb_user SET
        int_occupation_area=($1),
        int_senority_level=($2),
        int_technology=($3),
        int_technology_level=($4)
      WHERE id = $5
    `

    const values = [
      user.occupation_area,
      user.senority_level,
      user.technology,
      user.technology_level,
      user.id
    ]

    return db.query(query, values)
  },

  delete(id) {
    return db.query("DELETE FROM tb_user WHERE id = $1", [id])
  }
}
