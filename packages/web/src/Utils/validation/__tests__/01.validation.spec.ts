import { expect } from 'chai';
import 'mocha-sinon';

import { keyOnAnalyzedCallback } from '../../../constants';

import validateExaminerSetupType from '../validateExaminerSetupType';

describe('Validations: ', () => {
  beforeEach(function () {
    this.sinon.stub(console, 'error');
  });

  describe('validateExaminerSetupType: ', () => {
    const emptyParam = [undefined, null, false, 0];
    emptyParam.forEach(emptyParam => {
      it(`Empty parameter (${emptyParam})`, () => {
        const validated = validateExaminerSetupType(emptyParam);

        expect(validated).to.be.false;
        expect(console.error.calledOnce).to.be.true;
        expect(console.error.calledWith('The setup call require an object parameter')).to.be.true;
      });
    });

    const invalidTypeParams = [1, 3.1416, 'test', true, []];
    invalidTypeParams.forEach(invalidTypeParam => {
      it(`The parameter is not a valid type (${invalidTypeParam})`, () => {
        const validated = validateExaminerSetupType(invalidTypeParam);

        expect(validated).to.be.false;
        expect(console.error.calledOnce).to.be.true;
        expect(console.error.calledWith('The parameter type is not valid')).to.be.true;
      });
    });

    const invalidJsKeyParams = [undefined, null, false, 0, 1, 3.1416, true, [], {}];
    invalidJsKeyParams.forEach(invalidJsKeyParam => {
      it(`The "jsKey" parameter is empty (${invalidJsKeyParam})`, () => {
        const validated = validateExaminerSetupType({ jsKey: invalidJsKeyParam });

        expect(validated).to.be.false;
        expect(console.error.calledOnce).to.be.true;
        expect(console.error.calledWith('Invalid arguments: The "jsKey" parameter has to be a string')).to.be.true;
      });
    });

    const invalidCallbackParams = [undefined, null, false, 0, 1, 3.1416, true, [], {}];
    invalidCallbackParams.forEach(invalidCallbackParam => {
      it(`The "callback" parameter is empty (${invalidCallbackParam})`, () => {
        const validated = validateExaminerSetupType({
          jsKey: 'test',
          keyOnAnalyzedCallback: invalidCallbackParam,
        });

        expect(validated).to.be.false;
        expect(console.error.calledOnce).to.be.true;
        expect(console.error.calledWith(`Invalid arguments: Parameter "${keyOnAnalyzedCallback}" missing`)).to.be.true;
      });
    });
  });
});
