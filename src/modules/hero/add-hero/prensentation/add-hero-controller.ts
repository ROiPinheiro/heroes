import { ValidationError } from "../../../shared/errors/validation-error";
import { badRequest, serverError, ok } from "../../../shared/helpers/http";
import { Controller, HttpRequest, HttpResponse, Validator } from "../../../shared/protocols";
import { Hero } from "../model";

export class AddHeroController implements Controller {
  constructor(private readonly validator: Validator) {}

  async handle(httpRequest: HttpRequest<Hero>): Promise<HttpResponse> {
    try {
      await this.validator.validate(httpRequest);

      return ok();
    } catch (error) {
      return error instanceof ValidationError ? badRequest() : serverError();
    }
  }
}
