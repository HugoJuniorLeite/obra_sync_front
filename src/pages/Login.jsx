// import { zodResolver } from "@hookform/resolvers/zod";
// import { FormTitle, FormWrapper, InputWraper, Logo, SubmitButton } from "../layouts/Theme";
// import { useForm } from "react-hook-form";
// import { LoginSchema } from "../schemas/LoginSchema";
// import { login, putToken, validateToken } from "../services/apiLogin";
// import { useState } from "react";
// import TokenVerification from "../components/TokenVerification";
// import { Input } from "../components/Ui/Input";
// import logo from '../assets/logo.png'
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   // const [istoken, setIstoken] = useState(false);
//   // const [email, setEmail] = useState({})
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(LoginSchema),
//   });

//   const onSubmit = async (data) => {
//     console.log(data)
//     // setIstoken(true)

//     // setEmail(data.email)

//     try {
//       await login(data);
//       setIstoken(true);
//     } catch (err) {
//       console.error(err);
//       alert("Erro ao solicitar o token.");
//     }
//   };

//   return (
//     <FormWrapper>


//       {/* <FormTitle>ObraSync</FormTitle> */}
//       {/* <FormTitle> */}
//       <Logo src={logo} alt="logo"></Logo>

//       {/* </FormTitle> */}


//       <InputWraper>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <Input
//             type="email"
//             label="E-mail"
//             name="email"
//             register={register}
//             error={errors.email}
//           />

//           <Input
//             type="password"
//             label="Password"
//             name="password"
//             register={register}
//             error={errors.password}
//           />

//           <SubmitButton type="submit">
//             Entrar
//           </SubmitButton>
//         </form>
//       </InputWraper>

//     </FormWrapper>
//   )
// }


import { zodResolver } from "@hookform/resolvers/zod";
import { FormTitle, FormWrapper, InputWraper, Logo, SubmitButton } from "../layouts/Theme";
import { useForm } from "react-hook-form";
import { LoginSchema } from "../schemas/LoginSchema"; // aqui já deve validar cpf e senha
import { changePassword, firstLogin, login, putToken } from "../services/apiLogin";
import { useState } from "react";
import { Input } from "../components/Ui/Input";
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function Login() {

  const { handleLogin, firstLogin, changePassword, user } = useContext(AuthContext);


  const [step, setStep] = useState("firstAccess");
  // firstAccess → pede CPF, depois decide se pede senha ou troca senha

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
  });


  function getHomeRouteByOccupation(occupation) {
    if ([1, 7, 8].includes(occupation)) return "/minhas-notas";
    if (occupation === 6) return "/funcionarios";
    if (occupation === 3) return "/notas";
    if ([2, 4, 5].includes(occupation)) return "/home";
    return "/home"; // fallback
  }



  const onSubmit = async (data) => {
    try {
      if (step === "firstAccess") {
        console.log("Step firstAccess →", data);
        console.log("endpoint usado:", "/auth/is-first-access", data);

        const result = await firstLogin({ cpf: data.cpf });

        alert(result.message);

        if (result.response) {
          // Já tem senha cadastrada → vai para login
          setStep("login");
        } else {
          // Precisa cadastrar senha
          setStep("changePassword");
        }
      }

      if (step === "login") {
        const result = await handleLogin(data.cpf, data.password);
        console.log(result, "test");
        console.log(result.user.occupation, "ocupação");
        // alert("Login realizado!");

        const initialRoute = getHomeRouteByOccupation(result.user.occupation);
        navigate(initialRoute);

      }

      if (step === "changePassword") {
        const response = await changePassword({
          cpf: data.cpf,
          old_password: data.old_password,
          new_password: data.new_password,
        });

        alert(response.data.message || "Senha criada com sucesso!");
        setStep("login");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || err.message);
    }
  };
  return (
    <FormWrapper>
      <Logo src={logo} alt="logo" />

      <InputWraper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            label="CPF"
            name="cpf"
            register={register}
            error={errors.cpf}
          />

          {step === "login" && (
            <Input
              type="password"
              label="Senha"
              name="password"
              register={register}
              error={errors.password}
            />
          )}

          {step === "changePassword" && (
            <>
              <Input
                type="password"
                label="Senha antiga (6 primeiros dígitos do CPF)"
                name="old_password"
                register={register}
                error={errors.old_password}
              />
              <Input
                type="password"
                label="Nova senha"
                name="new_password"
                register={register}
                error={errors.new_password}
              />
            </>
          )}

          <SubmitButton type="submit">
            {step === "firstAccess" ? "Verificar Acesso" : "Entrar"}
          </SubmitButton>
        </form>
      </InputWraper>
    </FormWrapper>
  )
}
