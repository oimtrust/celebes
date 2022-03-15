import * as generator from "@tests/helpers/data-generators";

export const INVALID_LOGIN_DATA = {
  username: generator.generateNewUsername(),
  password: generator.generateNewPassword()
};

export const VALID_STANDARD_USER = {
    username: "standard_user",
    password: "secret_sauce"
}