import React from "react";
import { render } from "setupTests";

import HomeLayout from "./HomeLayout";

describe("HomeLayout", () => {
  it("renders with default props", () => {
    render(<HomeLayout />);
  });
});
