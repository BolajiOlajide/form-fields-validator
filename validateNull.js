'use strict';

function isObject(data) {
  return typeof data === 'object';
}

function validateNull(fields, moreDetails = false) {
  let isValid;
  let nullFields = [];
  let validFields = [];

  for (let field in fields) {
    if (isObject(fields[field])) {
      Object.keys(fields[field]).length === 0 ? nullFields.push(field) : validFields.push(field);
    }
    else {
      fields[field] ? validFields.push(field) : nullFields.push(field);
    }
  }

  isValid = nullFields.length ? false : true;

  return moreDetails ? {
    isValid,
    nullFields,
    validFields
  } : isValid;
};

module.exports = validateNull;
