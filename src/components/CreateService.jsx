import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Input } from "./Ui/Input";
import { Select, StyledLabel, SubmitButton, TextArea } from "../layouts/Theme";
import { CreateServiceSchema } from "../schemas/CreateServiceSchema";
import contract from "../services/apiContract";
import { useEffect, useState } from "react";
import { MoneyInputFallback } from "./Ui/MoneyInputFallBack";

export default function CreateService() {
  const [selectedOption, setSelectedOption] = useState("")
  const [projects, setProjects] = useState([])

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateServiceSchema),
  });



  useEffect(() => {
    const fetchClients = async () => {
      try {
        const data = await contract.getContracts();
        setProjects(data);
      } catch (error) {
        console.error("Erro ao buscar contratos:", error);
      }
    };
    fetchClients();
  }, []);


  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value)
  };

  const onSubmit = async ({ serviceName, descriptionService, priceService, selectedOption }) => {

    const payload = {

      name: serviceName,
      description: descriptionService,
      price: priceService,
      project_id: selectedOption,
    };


    console.log(payload, "onsumit")
    try {
      await contract.postService(payload);
      setSelectedOption(""); // <- também limpa o select, se necessário
      reset()         // <- isso limpa os campos do formulário
    } catch (err) {
      console.error(err);
      alert("Erro ao solicitar o token.");
    }
  }


  return (
    <div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          label="Serviço"
          name="serviceName"
          register={register}
          error={errors.serviceName} />

        <TextArea
          rows={3}
          placeholder="Descrição"
          {...register("descriptionService")}
          error={errors.descriptionService} />

        <Controller
          name="priceService"
          control={control}
          defaultValue={0} // ou undefined
          render={({ field }) => (
            <MoneyInputFallback
              label={"Valor previsto do projeto (R$)"}
              {...field}
              error={errors.priceService}
            />
          )}
        />

        <div>
          <StyledLabel >Escolha o contrato</StyledLabel>
          <Select id="select" value={selectedOption}
            {...register("selectedOption")}
            onChange={handleChange}>
            <option value="">Selecione um contrato</option>
            {projects.map((project) => (
              <option key={project.id} value={project.id}>
                {project.name}
              </option>
            ))}
          </Select>
        </div>


        <SubmitButton type="submit"> Salvar</SubmitButton>

      </form>
    </div>
  )
}