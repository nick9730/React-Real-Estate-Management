import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePropertiesContext } from "../Context/PropertiesContext";
import { useSignIn } from "./useSignIn";
import toast from "react-hot-toast";

const schema = z.object({
  email: z.string().email({ message: "Το πεδίο είναι υποχρεωτικό" }),
  password: z
    .string({ message: "Το πεδίο είναι υποχρεωτικό" })
    .regex(new RegExp(".*\\d.*"), "'Εστω ένα αριθμό"),
});

type FormValues = z.infer<typeof schema>;

export default function UserForm() {
  const { setOpenForm } = usePropertiesContext();

  const { SignInUser } = useSignIn();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {},
    resolver: zodResolver(schema),
  });

  const OnSubmit: SubmitHandler<FormValues> = (data) => {
    SignInUser(
      { email: data.email, password: data.password },
      {
        onError: () => toast.error("Έβαλες λάθος κωδικό"),
      }
    );
  };

  return (
    <form
      className="w-[40%] h-fit justify-center items-center flex flex-col bg-white rounded-xl gap-4 p-2 max-lg:w-full "
      onSubmit={handleSubmit(OnSubmit)}
    >
      <h1 className="text-navbar">Σύνδεση</h1>
      <label className="w-[70%] flex border-b-2 border-slate-100  font-thin max-lg:w-full text-navbar">
        Email
      </label>
      <input
        {...register("email")}
        placeholder="Email"
        className="w-[70%] p-4 border-2 rounded-xl border-violet-50 max-lg:w-full bg-input   "
      />
      <p className=" w-full h-full flex justify-center text-navbar">
        {errors.email?.message}
      </p>
      <label className="w-[70%] flex border-b-2 border-slate-100  font-extralight max-lg:w-full text-navbar">
        Κωδικός
      </label>
      <input
        type="text"
        {...register("password")}
        placeholder="Κωδικός"
        className="w-[70%] p-4 border-2 rounded-xl border-violet-50 max-lg:w-full bg-input  text-black  "
      />
      <div className=" w-full h-full flex justify-center text-navbar ">
        {errors && errors.password?.message}
      </div>

      <div className="w-full flex flex-row-reverse items-center justify-center gap-2">
        <button
          className="p-4 w-[150px] bg-button rounded-xl"
          onClick={() => setOpenForm(false)}
          type="button"
        >
          Ακύρωση
        </button>
        <button className="p-4 w-[150px] bg-button  rounded-xl">Υποβολή</button>
      </div>
    </form>
  );
}
