import { HttpRequest, Validator } from "../protocols";

export class ValidatorSpy implements Validator {
  input: any;

  async validate(httpRequest: HttpRequest): Promise<any> {
    this.input = httpRequest;
    return true;
  }
}
