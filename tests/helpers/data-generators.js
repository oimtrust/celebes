import { faker } from "@faker-js/faker";

/*
 * Generate password
 *
 * eg: pok!iemd$sleidb
 */
export function generateNewPassword() {
    return faker.internet.password();
  }
  
  /*
   * Generate unique username
   *
   * eg: michael.jackson
   */
  export function generateNewUsername() {
    return "automation." + faker.datatype.number({ min: 10000 }) + faker.internet.userName().toLocaleLowerCase();
  }