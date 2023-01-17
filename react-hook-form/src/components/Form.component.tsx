import { useForm } from "react-hook-form";
import { PaperPlaneTilt } from "phosphor-react";
import { FormContainer } from "./Form.styled";

type Inputs = {
  username: string;
  email: string;
  password: string;
  confirmedPassword: string;
};

export function Form() {
  const { register, watch, handleSubmit } = useForm<Inputs>();

  const inputsState = watch([
    "username",
    "email",
    "password",
    "confirmedPassword",
  ]);
  console.log(inputsState);
  return (
    <FormContainer>
      <form action="">
        <input
          type="text"
          placeholder="Username"
          required
          {...register("username")}
        />
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />
        <input
          type="password"
          placeholder="Confirm your password"
          required
          {...register("confirmedPassword")}
        />
        <button>
          <PaperPlaneTilt size={20} />
          <span>Submit</span>
        </button>
      </form>
    </FormContainer>
  );
}
