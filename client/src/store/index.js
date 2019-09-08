import React from "react";
import useGlobalHook from "use-global-hook";

import * as actions from "../actions";

const initialState = {
  displayResponsiveDesign: false,
  displayModernDesign: false,
  displayOptimizeDesign: false,
  displayFunctionalDesign: false
};

const useGlobal = useGlobalHook(React, initialState, actions);

export default useGlobal;