import { useContext } from "react";

import imageContext, { ImageContextType } from "../context/image-context";

const useFlowImageContext = (): ImageContextType => useContext(imageContext);

export default useFlowImageContext;
