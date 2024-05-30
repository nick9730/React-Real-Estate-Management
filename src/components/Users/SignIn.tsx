import UserForm from "./UserForm";
import image from "../image/image1.jpg";
import { usePropertiesContext } from "../Context/PropertiesContext";

import { useSignIn } from "./useSignIn";

export default function SignInForm() {
  const { openForm, setOpenForm } = usePropertiesContext();

  const { SignInUser } = useSignIn();

  return (
    <div
      style={{
        backgroundImage: `url("${image}")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backdropFilter: "revert",
      }}
      className="w-full h-screen flex justify-center items-center gap-3 max-lg:p-2  "
    >
      {!openForm && (
        <>
          <button
            onClick={() => {
              SignInUser({
                email: "example@gmail.com",
                password: "1234567890",
              });
            }}
            className=" w-36 p-4 bg-navbar rounded-full text-white hover:bg-button"
          >
            Επισκέπτης
          </button>
          <button
            onClick={() => {
              setOpenForm(!openForm);
            }}
            className="w-36 p-4 bg-button  rounded-full text-white hover:bg-navbar"
          >
            Admin
          </button>
        </>
      )}
      {openForm && <UserForm />}
    </div>
  );
}
