import { useContext } from "react";

import imageContext, { ImageContextType } from "../context/image-context";

const useImageFlowContext = (): ImageContextType => useContext(imageContext);

export default useImageFlowContext;
