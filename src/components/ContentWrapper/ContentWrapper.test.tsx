import React from "react";
import { render } from "setupTests";

import ContentWrapper from "./ContentWrapper";

describe("ContentWrapper", () => {
  it("renders with default props", () => {
    render(<ContentWrapper />);
  });
});
