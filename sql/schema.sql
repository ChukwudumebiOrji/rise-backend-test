CREATE SCHEMA dumebi_rise_backend_test;

ALTER SCHEMA dumebi_rise_backend_test OWNER TO postgres;

CREATE TABLE dumebi_rise_backend_test.users (
  id serial PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL UNIQUE,
  password text NOT NULL
);

ALTER TABLE dumebi_rise_backend_test.users OWNER TO postgres;

CREATE TABLE dumebi_rise_backend_test.files (
  id serial PRIMARY KEY,
  name text NOT NULL,
  type text NOT NULL,
  size integer NOT NULL,
  user_id integer REFERENCES dumebi_rise_backend_test.users (id)
);

ALTER TABLE dumebi_rise_backend_test.files OWNER TO postgres;


CREATE TABLE dumebi_rise_backend_test.folders (
  id serial PRIMARY KEY,
  name text NOT NULL,
  user_id integer REFERENCES dumebi_rise_backend_test.users (id)
);

ALTER TABLE dumebi_rise_backend_test.folders OWNER TO postgres;
