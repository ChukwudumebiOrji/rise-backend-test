const express = require('express');
const chai = require('chai');
const assert = chai.assert;

describe('My Express App', () => {
  it('should start without error', () => {
    const app = express();
    app.listen(3000, () => console.log('Server started on port 3000'));
  });
});
