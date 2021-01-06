import React from "react";
import { render } from "setupTests";

import InputForm from "./InputForm";

describe("InputForm", () => {
  it("renders with default props", () => {
    render(<InputForm labelText="This is the label" onChange={() => {}} />);
  });
});
