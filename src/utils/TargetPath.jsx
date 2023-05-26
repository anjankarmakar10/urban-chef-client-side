import { useLocation } from "react-router-dom";

const TargetPath = () => {
  const { state } = useLocation();
  return state?.pathname || "/";
};

export default TargetPath;
