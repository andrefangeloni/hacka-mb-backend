import db from "../database"

module.exports = {
  login(email) {
    return db.query(`SELECT id, str_email, str_password FROM tb_user WHERE str_email = $1`, [email])
  },

  me(id) {
    return db.query(`
      SELECT *
      FROM tb_user
      WHERE id = $1`, [id]
    )
  },

  meSoftSkills(id) {
    return db.query(`
      SELECT (
        SELECT count(id)
          FROM tb_user_soft_skills_goals
          WHERE id_user = ${id}
        ) AS "totalSoftSkill",
        (
          SELECT count(id)
            FROM tb_user_soft_skills_goals
            WHERE id_user = ${id}
            AND bo_complete = true
        ) AS "totalCompleteSoftSkill"
      `
    )
  },

  meTechSkills(id) {
    return db.query(`
    SELECT (
      SELECT count(id)
        FROM tb_user_technological_goals
        WHERE id_user = ${id}
      ) AS "totalTechnology",
      (
        SELECT count(id)
          FROM tb_user_technological_goals
          WHERE id_user = ${id}
          AND bo_complete = true
      ) AS "totalCompleteTechnology"
      `
    )
  }
}
