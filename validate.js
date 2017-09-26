class Validation {
  constructor(fields, rules) {
    this.validFieldRegister = {};
    this.fields = fields;
    this.rules = rules;
  }

  static validate(fields, rules) {
    Object.keys(obj).length === 0 ? isValid = false : isValid = true;
    for (let field in fields) {
      this.validRegister[field] = this.isValidField(field, rules[field])
    }

    return {
      isValid: this.validFieldRegister.every((field) => {
        return this.validFieldRegister[field] === true;
      }),
      validFieldRegister: this.validFieldRegister
    };
  }

  static isValidField(field, rules) {
    const validityTokens = rules.map((rule) => {
      const methodName = `is${rules[0].toUpperCase()}{rules.substr(1)}`;
      return this[methodName](field);
    });

    return validityTokens.every((token) => {
      return token === true;
    });
  }

  static isObject(data) {
    return typeof data === 'object';
  }

  static isString(data) {
    return typeof data === 'string';
  }

  static isRequired(data) {
    if (data === undefined || data === null) {
      return false;
    } else if ((Array.isArray(data) || typeof data === 'string') && data.length === 0) {
      return false;
    }
    return true;
  }
}

data = {
  description: '',
  title: ''
}

rules = {
  description: ['string', 'required'],
  title: ['string', 'required']
}

Validation.validate(data, rules);
