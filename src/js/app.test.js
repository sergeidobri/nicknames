import { Validator } from "./app";

const validator = new Validator();

describe("Validator test", () => {
  it("true for correct username", () => {
    expect(validator.validateUsername("user12nagibator")).toBe(true);
  });

  it("false if nickname starts with not a letter", () => {
    expect(validator.validateUsername("1user")).toBe(false);
    expect(validator.validateUsername("_user")).toBe(false);
    expect(validator.validateUsername("-user")).toBe(false);
  });

  it("false if nickname ends with not a letter", () => {
    expect(validator.validateUsername("user1")).toBe(false);
    expect(validator.validateUsername("user-")).toBe(false);
    expect(validator.validateUsername("user-")).toBe(false);
  });

  it("false if nickname contains more than 3 digits in a row", () => {
    expect(validator.validateUsername("user12user")).toBe(true);
    expect(validator.validateUsername("user123user")).toBe(true);
    expect(validator.validateUsername("user1234user")).toBe(false);
    expect(validator.validateUsername("user12345user")).toBe(false);
  });

  it("false if nickname contains not latin letter", () => {
    expect(validator.validateUsername("userф123user")).toBe(false);
  });

  it("false if nickname contains space or \\n symbol", () => {
    expect(validator.validateUsername("user 123user")).toBe(false);
    expect(validator.validateUsername("user\n123user")).toBe(false);
  });
});
