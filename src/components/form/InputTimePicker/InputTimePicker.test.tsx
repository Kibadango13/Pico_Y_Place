import React from "react";
import { render } from "setupTests";

import InputTimePicker from "./InputTimePicker";

describe("InputTimePicker", () => {
  it("renders with default props", () => {
    render(
      <InputTimePicker
        error="This is error message"
        onChange={() => {}}
        placeholder="This is the place holder"
        value="12:00"
        labelText="This is the label"
      />
    );
  });
});
