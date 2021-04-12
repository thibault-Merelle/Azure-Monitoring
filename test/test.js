import { expect } from "chai";

const routes = require("../front/src/CallApi");

describe("Example with advanced params", () => {
  it("should return correct string", () => {
    const req = {
      query: {
        min: 1,
        max: 10,
      },
    };
    const res = {
      end: sinon.spy(),
    };

    routes.S1(req, res);
    expect(res.end.calledOnce).to.be.true;
    expect(res.end.args[0][0]).to.have.string("Here is your number");
  });
});
