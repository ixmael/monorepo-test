import { expect } from 'chai';
import { JSDOM } from 'jsdom';

import addToHeader from '..';

describe('Add element to the header tag: ', () => {
  beforeEach(function () {
    const { window } = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`);
    global.document = window.document;
  });

  it('The script element is added to header', () => {
    const id = 'new-script-element';
    const script = document.createElement('script');
    script.id = id;
    script.type = 'text/javascript';

    expect(script).to.not.null;

    addToHeader(script);

    expect(document.getElementById(id)).to.not.null;
  });
});
