export interface Account {
  sub?: string;
  role?: string;
  preferred_username?: string;
  name?: string;
  family_name?: string;
  given_name?: string;
  username?: string;
  password?: string;
  email?: string;
  email_verified?: boolean;
  picture?: string;
  phone_number?: string;
  phone_number_verified?: boolean;
  locale?: string;
  locate?: string;
  gender?: string;
  birthdate?: string;
  address?: string;
  provider: string;
  idToken: string;
  base64_picture?: any;
  city?: string;
  country?: string;
}

export interface loginInternalPayload {
  username?: string;
  password?: string;
}

export interface AuthorizeResult {
  access_token: string;
  expires_in: number;
  authorizeAdditionalParameters?: { [name: string]: string };
  tokenAdditionalParameters?: { [name: string]: string };
  additionalParameters?: { [name: string]: string };
  id_token: string;
  refresh_token: string;
  token_type: string;
  scopes: [string];
}
