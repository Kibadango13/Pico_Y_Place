import React from "react";
import { render } from "setupTests";

import TrafficRegulationPredictor from "./TrafficRegulationPredictor";

describe("TrafficRegulationPredictor", () => {
  it("renders with default props", () => {
    render(<TrafficRegulationPredictor />);
  });
});