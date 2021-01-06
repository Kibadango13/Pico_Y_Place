import React from "react";
import { render } from "setupTests";

import InputDatePicker from "./InputDatePicker";

describe("InputDatePicker", () => {
  it("renders with default props", () => {
    render(
      <InputDatePicker
        labelText="This is the label"
        error="This is the error message"
      />
    );
  });
});
