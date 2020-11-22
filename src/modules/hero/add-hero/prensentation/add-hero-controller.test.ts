import * as faker from "faker";
import { ValidationError } from "../../../../shared/errors/validation-error";
import { HttpRequest } from "../../../../shared/protocols";
import { ValidatorSpy } from "../../../../shared/test/validation-spy";
import { Hero } from "../model";
import { AddHeroController } from "./add-hero-controller";

const makeSut = () => {
  const validationSpy = new ValidatorSpy();
  const sut = new AddHeroController(validationSpy);
  return { sut, validationSpy };
};

const makeRequest = (): HttpRequest<Hero> => ({
  body: {
    name: faker.random.word(),
    bio: {
      age: faker.random.number(),
      description: faker.random.word(),
    },
    rarity: "normal",
  },
  params: {},
});

describe("AddHeroController", () => {
  test("should return 400 if validation fails", async () => {
    const { sut, validationSpy } = makeSut();
    jest.spyOn(validationSpy, "validate").mockImplementationOnce(() => {
      throw new ValidationError("");
    });
    const httpResponse = await sut.handle(makeRequest());
    expect(httpResponse.statusCode).toBe(400);
  });

  test("should return 200 with correct params", async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle(makeRequest());
    expect(httpResponse.statusCode).toBe(200);
  });
});
