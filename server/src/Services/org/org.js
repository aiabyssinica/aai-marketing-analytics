import { CreateStripeCustomer, DeleteStripeCustomer } from '../stripe/stripeCustomer.js';
import {
  CreateCompanyModel,
  SetCompanyStripeId,
  GetCompanyModel,
  PutCompanyModel,
  DeleteCompanyModel
} from '../../Model/sql/org/org.js';
import { CreateOrgRole } from '../../Model/sql/roles/roles.js';

export const CreateOrg = async (req, res) => {
  console.log('Org Req: ', req);
  let primary_email = req.body.email;
  let org_name = req.body.org_name;
  let user_id = req.body.user_id;
  let role = req.body.role;

  let org_id = await CreateCompanyModel(primary_email, org_name);

  let stripe_id = await CreateStripeCustomer(primary_email, user_id, org_id);

  await SetCompanyStripeId(stripe_id.id, org_id);

  await CreateOrgRole(org_id, user_id, role);

  res.status(200).send('Org Created');
};

export const GetOrgs = async (req, res) => {
  let user_id = req.query.user_id;

  let result = await GetCompanyModel(user_id);

  res.status(200).send(result);
};

export const DeleteOrg = async (req, res) => {
  let org_id = req.query.org_id;
  let stripe_customer_id = req.query.stripe_customer_id;

  await DeleteStripeCustomer(stripe_customer_id);
  await DeleteCompanyModel(org_id);

  res.status(200).send('Delete Successful');
};

export const PutOrg = async (req, res) => {
  let org_id = req.body.org_id;
  let org_name = req.body.org_name;

  await PutCompanyModel(org_id, org_name);

  res.status(200).send('Put Successful');
};
