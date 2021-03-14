CREATE TABLE "tb_user" (
  "id" SERIAL PRIMARY KEY,
  "str_name" text NOT NULL,
  "str_email" text NOT NULL,
  "str_password" text NOT NULL,
  "int_occupation_area" int,
  "int_senority_level" int,
  "int_goal_senority_level" int,
  "int_technology" int,
  "int_technology_level" int,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "tb_user_technological_goals" (
  "id" SERIAL PRIMARY KEY,
  "id_user" int NOT NULL,
  "str_description" text NOT NULL,
  "int_time" int,
  "bo_complete" boolean DEFAULT (false),
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "tb_user_soft_skills_goals" (
  "id" SERIAL PRIMARY KEY,
  "id_user" int NOT NULL,
  "str_title" text NOT NULL,
  "str_description" text NOT NULL,
  "bo_complete" boolean DEFAULT (false),
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

ALTER TABLE "tb_user_technological_goals" ADD FOREIGN KEY ("id_user") REFERENCES "tb_user" ("id");

ALTER TABLE "tb_user_soft_skills_goals" ADD FOREIGN KEY ("id_user") REFERENCES "tb_user" ("id");
