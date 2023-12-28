CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  username VARCHAR(255),
  email VARCHAR(255) UNIQUE,
  firebase_user_id VARCHAR(255),
  verify_key VARCHAR(255),
  is_email_verified BOOLEAN DEFAULT FALSE
);

CREATE TABLE contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255(),
  last_name VARCHAR(255(),
  middle_name VARCHAR(255(),
  email VARCHAR(255(),
  phone VARCHAR(255(),
  mobile VARCHAR(255(),
  socials JSON
);

CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  org_id UUID REFERENCES companies(id),
  user_id UUID REFERENCES users(id),
  role VARCHAR(255)
);

CREATE TABLE industry (
  id INTEGER PRIMARY KEY,
  "name" VARCHAR(255)
);

CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  org_name VARCHAR(255),
  primary_email VARCHAR(255) REFERENCES users(email) ON UPDATE CASCADE,
  industry_id REFERENCES industry(id),
  category VARCHAR(255),
  organization_type VARCHAR(255), -- plc, corp, ngo, sole-proprietership
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  country VARCHAR(255),
  phone_number VARCHAR(255),
  mobile_number VARCHAR(255),
  mobile_number_2 VARCHAR(255),
  mobile_number_3 VARCHAR(255),
  mobile_number_4 VARCHAR(255),
  website VARCHAR(255),
  stripe_customer_id VARCHAR(255),
  subscription_id VARCHAR(255),
  plan_type VARCHAR(255)
);

CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description VARCHAR(1000),
  author VARCHAR(255),
  org_id UUID REFERENCES companies(id)
);

CREATE TABLE invites (
  id SERIAL PRIMARY KEY,
  org_id UUID REFERENCES companies(id),
  verify_key VARCHAR(255),
  recipient_email VARCHAR(255),
  sender_email VARCHAR (255)
);
