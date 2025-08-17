import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormTitle, FormWrapper, InputWraper, RowInput, Select, StyledLabel, SubmitButton } from "../layouts/Theme";
import { Input } from "./Ui/Input";
import employee from "../services/apiEmployee";
import contract from "../services/apiContract";
import occupation from "../services/apiOccupation";
import { EmployeeSchema, } from "../schemas/EmployeeSchema";

import { IMaskInput } from "react-imask";
import Checkbox from "./Ui/Checkbox";


export default function RegisterEmployee(){
 const [ selectedOptionProject, setSelectedOptionProject] = useState("")
  const [ selectedOptionOccupation, setSelectedOptionOccupation] = useState("")


    const [ projects, setProjects] = useState([])
    const [ occupations, setOccupations] = useState([])
    const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");



 const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EmployeeSchema),
      defaultValues: { driversLicense: false }
  });


   const hasCNH = watch("driversLicense");


       useEffect(() => {
    const fetchClients = async () => {
  try {
      const [dataProject, dataOcupation] = await Promise.all([
        contract.getContracts(),
        occupation.getOccupation()
      ]);

      setProjects(dataProject);
      setOccupations(dataOcupation);
      console.log(dataOcupation)
    } catch (error) {
        console.error("Erro ao buscar contratos:", error);
      }
    };
    fetchClients();
  }, []);


    // limpa campos CNH quando desmarca
  useEffect(() => {
    if (!hasCNH) {
      setValue("cnhCategory", "");
      setValue("cnhNumber", "");
      setValue("cnhValidity", "");
      setValue("firstDriversLicense", "");
    }
  }, [hasCNH, setValue]);

   const handleChange = (event) => {
    setSelectedOptionProject(event.target.value);
  };
  

   const handleChangeOcupation = (event) => {
    setSelectedOptionOccupation(event.target.value);
  };

  const onSubmit = async (data) => {
      
const payload = {
    name: data.employeeName,
    date_of_birth: new Date(data.birthDate), // se tiver campo de data de nascimento
    rg: data.rgNumber,
    cpf: data.cpfNumber,
    drivers_license: true, // você pode criar um campo booleano no form se quiser
    occupation_id: Number(selectedOptionOccupation),
    admission_date: new Date(data.admissionDate),
    phones: {
      create: {
        phoneNumber: data.phoneNumber
      }
    },
    cnhs: {
      create: {
        category_cnh: data.cnhCategory, // criar campo no form
        number_license: data.cnhNumber, // criar campo no form
        validity: new Date(data.cnhValidity), // criar campo no form
        first_drivers_license: new Date(data.firstDriversLicense) // criar campo no form
      }
    },
    address: {
      create: {
        zip_code: cep,
        street_name: adress,
        number_of_house: Number(data.adressNumber),
        neighborhood: neighborhood,
        city: city,
        state: state,
        country: "Brasil"
      }
    },
    project_team: {
      create: {
        project_id: Number(selectedOptionProject),
        active: true
      }
    }
  };
        console.log(payload, "onsumit")
     try {
       await employee.postEmployee(payload);
    //    setSelectedOption(""); // <- também limpa o select, se necessário
          reset()         // <- isso limpa os campos do formulário
          setSelectedOptionOccupation("")
          setSelectedOptionProject("")
          setProjects("")
          setOccupations("")
          setCep("")
          setAdress("")
          setNeighborhood("")
          setCity("")
          setState("")

     } catch (err) {
       console.error(err);
       alert("Erro ao solicitar o token.");
     }
  }

  
 async function buscarCep(valor) {
    if (valor.length !== 8) return;
    try {
      const response = await fetch(`https://viacep.com.br/ws/${valor}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAdress(data.logradouro);
        setNeighborhood(data.bairro);
        setCity(data.localidade);
        setState(data.uf);
      }
    } catch (error) {
      console.error("Erro ao buscar CEP:", error.message);
    }
  }


 function handleCepChange(e) {
    const valor = e.target.value.replace(/\D/g, "");
    setCep(valor);
    if (valor.length === 8) buscarCep(valor);
    else {
      setAdress(""); setNeighborhood(""); setCity(""); setState("");
    }
  }


    
    return(

//  <FormWrapper>

          <InputWraper>
        <FormTitle>Cadastrar funcionário</FormTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
<RowInput>
              <Input
            type="text"
            label="Nome do funcionário"
            name="employeeName"
            register={register}
            error={errors.employeeName}
          />

              <Input
            type="date"
            label="Data de nascimento"
            name="birthDate"
            register={register}
            error={errors.birthDate}
          />

          </RowInput>
<RowInput>
          <Input
            type="text"
            label="Rg"
            mask="00.000.000-00"
            definitions={{ "0": /[0-9]/ }}
            name="rgNumber"
            register={register}
            error={errors.rgNumber}
          />

              <Input
              
            type="text"
            label="CPF"
            mask="000.000.000-00"
            definitions={{ "0": /[0-9]/ }}
            name="cpfNumber"
            register={register}
            error={errors.cpfNumber}
          />

</RowInput>


<RowInput>

            <Input
            type="phone"
            label="Telefone"
            mask="(00) 0 0000-0000"
            definitions={{ "0": /[0-9]/ }}
            name="phoneNumber"
            register={register}
            error={errors.phoneNumber}
            />

      <Input
      label="Cep" 
      value={cep} 
      onChange={handleCepChange} 
      maxLength={8} />

      
      </RowInput>

      <RowInput>
         <Input
         value={adress} disabled readOnly
         type="text"
         label="Endereço"
         name="Adress"
         register={register}
         error={errors.Adress}
         />


            <Input
            type="text"
            label="numero"
            name="adressNumber"
            register={register}
            error={errors.adressNumber}
            />
</RowInput>

<RowInput>


         <Input
            value={neighborhood} disabled readOnly
            type="text"
            label="Bairro"
            name="neighborhood"
            register={register}
            error={errors.neighborhood}
            />

           <Input
            value={city} disabled readOnly
            type="text"
            label="Cidade"
            name="city"
            register={register}
            error={errors.city}
            />


           <Input
            value={state} disabled readOnly
            type="text"
            label="estado"
            name="state"
            register={register}
            error={errors.state}
            />
            </RowInput>

               <RowInput>

        <Checkbox label="Possui CNH?" register={register} name="driversLicense" />


        </RowInput>


          {hasCNH &&(

            <>
        <RowInput>

      <div>
  <StyledLabel>Categoria CNH</StyledLabel>
  <Select {...register("cnhCategory")} error={errors.cnhCategory}>
    <option value="">Selecione a categoria</option>
    <option value="AB">AB</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
  </Select>
  {errors.cnhCategory && <span>{errors.cnhCategory.message}</span>}
</div>

          <Input
            type="text"
            label="Número CNH"
            name="cnhNumber"
            register={register}
            error={errors.cnhNumber}
          />
        </RowInput>
        <RowInput>
          <Input
            type="date"
            label="Validade CNH"
            name="cnhValidity"
            register={register}
            error={errors.cnhValidity}
          />
          <Input
            type="date"
            label="1ª Habilitação"
            name="firstDriversLicense"
            register={register}
            error={errors.firstDriversLicense}
          />
        </RowInput>
  </>
)}
      
        

        <div>
        <StyledLabel >Cargo:</StyledLabel>
        <Select id="select" value={selectedOptionOccupation} 
         {...register("selectedOptionOccupation")}
        onChange={handleChangeOcupation}>
                <option value="">Selecione um projeto</option>
                {occupations.map((occupation) => (
                  <option key={occupation.id} value={occupation.id}>
                    {occupation.name}
                  </option>
                ))}
        </Select>
        </div>



        <div>
        <StyledLabel >Centro de custo(Projeto):</StyledLabel>
        <Select id="select" value={selectedOptionProject} 
         {...register("selectedOptionProject")}
            onChange={handleChange}>
                <option value="">Selecione um projeto</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                ))}
        </Select>
        </div>

            <Input
            type="date"
            label="Data de Admissão:"
            name="admissionDate"
            register={register}
            error={errors.admissionDate}
          />
   

          <SubmitButton type="submit">
            Salvar
          </SubmitButton>
        </form>



   
          </InputWraper>
    
      

    // </FormWrapper>

    )
}