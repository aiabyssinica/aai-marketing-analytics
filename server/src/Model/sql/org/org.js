import db from '../../../Database/sql/db.js';

export const CreateCompanyModel = async (primary_email, company_name) => {
  let text = `INSERT INTO companies(primary_email, name)
              VALUES($1, $2)
              RETURNING id`;

  let values = [primary_email, company_name];

  let queryResult = await db.query(text, values);

  return queryResult.rows[0].id;
};

export const GetCompanyModel = async (user_id) => {
  let text = `
      SELECT
        companies.id,
        companies.name,
        roles.user_id,
        roles.role
      FROM
        companies
      INNER JOIN roles
          ON roles.company_id = companies.id
      WHERE roles.user_id=$1
  `;

  let values = [user_id];

  let queryResult = await db.query(text, values);
  return queryResult.rows;
};

export const SetCompanyStripeId = async (stripe_id, company_id) => {
  let text = `UPDATE company_subscriptions SET stripe_customer_id=$1 WHERE company_id=$2`;

  let values = [stripe_id, company_id];

  await db.query(text, values);
};

export const DeleteCompanyModel = async (company_id) => {
  let roleText = `DELETE FROM roles WHERE company_id=$1`;
  let roleValues = [company_id];

  let todosText = `DELETE FROM todos WHERE company_id=$1`;
  let todosValues = [company_id];

  let companyText = `DELETE FROM companies WHERE id=$1`;
  let companyValues = [company_id];

  await db.query(roleText, roleValues);

  await db.query(todosText, todosValues);

  await db.query(companyText, companyValues);
  return;
};

export const PutCompanyModel = async (company_id, company_name) => {
  let text = `UPDATE companies SET name=$2 
              WHERE id=$1`;

  let values = [company_id, company_name];

  await db.query(text, values);
};

export const GetCompaniesbyEmail = async (primary_email) => {
  let text = `SELECT * from companies where primary_email=$1`;

  let values = [primary_email];

  let queryResult = await db.query(text, values);

  return queryResult.rows;
};

export const CancelPlanbySubId = async (subscription_id) => {
  let text = `UPDATE company_subscriptions SET plan_type=$1 WHERE subscription_id=$2`;

  let values = [null, subscription_id];

  await db.query(text, values);
};