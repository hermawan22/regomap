import React from "react";
import { shallow } from "enzyme";

import ReGoMap from "../ReGoMap";

test("Search render correctly", () => {
  const component = shallow(<ReGoMap />);
  expect(component).toMatchSnapshot();
});
