import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  username: z
    .string()
    .min(1, "Use a minimum of 1 Symbol")
    .max(10, "Use a Maximum of 20 Symbols"),
  surname: z
    .string()
    .min(1, "Use a minimum of 1 Symbol")
    .max(10, "Use a Maximum of 20 Symbols"),
});

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      surname: "",
    },
  });
  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
        onSubmit={handleSubmit(formSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="username"
            {...register("username")}
          />
          <p className="text-red-500 text-xs italic">
            {errors.username && <span>{errors.username.message}</span>}
          </p>
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="surname"
          >
            Surname
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="surname"
            {...register("surname")}
          />
          <p className="text-red-500 text-xs italic">
            {errors.surname && <span>{errors.surname.message}</span>}
          </p>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Register
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default RegisterForm;
