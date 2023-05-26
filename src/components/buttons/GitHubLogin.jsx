import { ImGithub } from "react-icons/im";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import TargetPath from "../../utils/TargetPath";

const GitHubLogin = () => {
  const { loginWithGitHub } = useAuth();

  const navigate = useNavigate();
  const path = TargetPath();

  const handleLogin = async () => {
    try {
      await loginWithGitHub();
      navigate(path, { replace: true });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center gap-2 rounded-md border-2 border-[#403F3F] font-semibold p-2 w-full justify-center hover:bg-slate-300"
    >
      <ImGithub />
      Login with GitHub
    </button>
  );
};

export default GitHubLogin;
