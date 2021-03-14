CREATE TABLE "tb_user" (
  "id" SERIAL PRIMARY KEY,
  "str_name" text NOT NULL,
  "str_email" text NOT NULL,
  "str_password" text NOT NULL,
  "int_occupation_area" int NOT NULL,
  "int_senority_level" int NOT NULL,
  "int_technology" int NOT NULL,
  "int_technology_level" int NOT NULL,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);
