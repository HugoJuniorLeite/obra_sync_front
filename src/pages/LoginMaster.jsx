import { zodResolver } from "@hookform/resolvers/zod";
import { FormTitle, FormWrapper, InputWraper, Logo, SubmitButton } from "../layouts/Theme";
import { useForm } from "react-hook-form";
import { LoginMasterSchema } from "../schemas/LoginMasterSchema";
import { putToken } from "../services/apiLogin";
import { useState } from "react";
import TokenVerification from "../components/TokenVerification";
import { Input } from "../components/Ui/Input";
import logo from '../assets/logo.png'

export default function LoginMaster() {
  const [istoken, setIstoken] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginMasterSchema),
  });

  const onSubmit = async (data) => {
    // console.log(data)
    setIstoken(true)
    try {
      await putToken(data);
      setIstoken(true);
    } catch (err) {
      console.error(err);
      alert("Erro ao solicitar o token.");
    }
  };

  const handleTokenSubmit = async (code) => {
    console.log(code);
    setIstoken(false)
    try {
      // await validateToken(code);
      alert("Token validado com sucesso!");
    } catch (err) {
      console.error(err);
      alert("Código inválido.");
    }
  };

  return (
    <FormWrapper>


      {/* <FormTitle>ObraSync</FormTitle> */}
      {/* <FormTitle> */}
      <Logo src={logo} alt="logo"></Logo>

      {/* </FormTitle> */}

      {!istoken ? (
        <InputWraper>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              label="Email"
              name="email"
              register={register}
              error={errors.email}
            />
            <SubmitButton type="submit">
              Enviar código
            </SubmitButton>
          </form>
        </InputWraper>
      ) : (
        <TokenVerification onSubmit={handleTokenSubmit} />
      )}
    </FormWrapper>
  );
}