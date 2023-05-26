import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import InputField from "../../components/Inputs/InputField";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import { useAuth } from "../../context/AuthContext";
import TargetPath from "../../utils/TargetPath";

const SignUp = () => {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const path = TargetPath();

  const nameRef = useRef();
  const emailRef = useRef();
  const urlRef = useRef();
  const passRef = useRef();
  const confirmPassRef = useRef();

  const { createAccount, profileUpdate } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let name = nameRef.current.value;
    let email = emailRef.current.value;
    let url = urlRef.current.value;
    let password = passRef.current.value;
    let confirmPassword = confirmPassRef.current.value;

    if (error) {
      window.scrollTo(0, 0);
    }

    if (password < 6) {
      setError("Password at lest 6 char or gratter!");
      return;
    }

    if (name === "") {
      setError("Name can not be empty!");
      return;
    }

    if (password !== confirmPassword) {
      setError("Password must be same!!");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const { user } = await createAccount(email, password);
      await profileUpdate(user, name, url);
      navigate(path, { replace: true });
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFocus = () => {
    setError("");
    setMessage("");
    setLoading(false);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto px-4 py-8 min-h-[90vh]">
        <section className="rounded-md w-full px-8 bg-white border py-14">
          <h2 className="pb-6 mb-6 border-b-2 w-full text-center font-semibold text[#403F3F] text-2xl md:text-4xl ">
            Register your account
          </h2>

          {error && (
            <div className="bg-[#E8F0FE] p-2 rounded-md text-sm font-semibold text-[#fd3636] mb-2">
              {error}
            </div>
          )}
          {message && (
            <div className="bg-[#06bb4b] p-2 rounded-md text-sm font-semibold text-[#ffffff] mb-2">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-6">
            <InputField
              focus={handleFocus}
              refer={nameRef}
              label="Your Name"
              type="text"
              placeholder="Enter your name"
            />

            <InputField
              focus={handleFocus}
              refer={urlRef}
              label="Profile photo url"
              type="text"
              placeholder="Enter your photo url"
            />

            <InputField
              focus={handleFocus}
              refer={emailRef}
              label="Email address"
              type="email"
              placeholder="Enter your email address"
            />

            <InputField
              focus={handleFocus}
              refer={passRef}
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
            <InputField
              focus={handleFocus}
              refer={confirmPassRef}
              label="Confirm Password"
              type="password"
              placeholder="Enter your password"
            />

            <ButtonSubmit disabled={loading}>Register</ButtonSubmit>
            <span className="text-center font-semibold text-base md:text-lg text-[#706F6F]">
              Already Have An Account? {""}
              <Link to="/signin" className="text-[#FB7453]">
                Login
              </Link>
            </span>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignUp;
