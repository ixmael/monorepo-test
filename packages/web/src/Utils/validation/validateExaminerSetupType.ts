import { keyJsKey, keyOnAnalyzedCallback } from '../../constants';

export const validateExaminerSetupType = (obj?: any): boolean => {
  if (!obj) {
    console.error('The setup call require an object parameter');
    return false;
  }

  if (typeof obj !== 'object' || Array.isArray(obj)) {
    console.error('The parameter type is not valid');
    return false;
  }

  // Validate jsKey property
  if (!(keyJsKey in obj)) {
    console.error('Invalid arguments: Parameter "jsKey" missing');
    return false;
  }
  if (typeof obj[keyJsKey] !== 'string') {
    console.error('Invalid arguments: The "jsKey" parameter has to be a string');
    return false;
  }

  // Validate callback property
  if (!(keyOnAnalyzedCallback in obj)) {
    console.error(`Invalid arguments: Parameter "${keyOnAnalyzedCallback}" missing`);
    return false;
  }
  if (typeof obj[keyOnAnalyzedCallback] !== 'function') {
    console.error('Invalid arguments: The "callback" parameter has to be a function');
    return false;
  }

  return true;
};

export default validateExaminerSetupType;
