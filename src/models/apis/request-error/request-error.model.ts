export class RequestError {
  errors: any;

  constructor(apiErrors: any) {
    this.errors = {};

    Object.keys(apiErrors).forEach(prop => {
      const value = apiErrors[prop];

      const propHandle = prop.trim().replace(/^x?\[\d\]\./i, '');
      const newProp =
        propHandle.substr(0, 1).toLowerCase() + propHandle.substr(1);
      if (value && value.length > 0) {
        const [message] = value;
        this.errors[newProp] = message;
      }
    });
  }
}

export class GeneralRequestError {
  
  generalError: string;
  stack?: string;

  constructor(stack?: string) {
    this.stack = stack;
    this.generalError = "api_error";
  }
}

export class ConflictRequestError {
  message: string;

  constructor(messagem: string) {
    this.message = messagem;
  }
}