import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "./Ui/Input";
import { ErrorText, Select, StyledLabel, SubmitButton, TextArea } from "../layouts/Theme";
import {useState } from "react";
import occupation from "../services/apiOccupation";
import { CreateOccupationSchema } from "../schemas/CreateOccupationSchema";
import Checkbox from "./Ui/Checkbox";

export default function CreateOccupation(){
  const [selectedOption, setSelectedOption] = useState("")
     const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm({
        resolver: zodResolver(CreateOccupationSchema),
      });

      const onSubmit = async ({occupationName, descriptionOccupation, selectedOption,  }) => {
                const dangerousnessBoolean = selectedOption ;

            const payload = {
                
                  name: occupationName ,
                  description_of_occupation: descriptionOccupation ,
                  dangerousness:dangerousnessBoolean,
                  
              };
      
              console.log(payload, "onsumit")
      
              try {
             await occupation.postOccupation(payload);
             setSelectedOption(""); // <- também limpa o select, se necessário
              reset()         // <- isso limpa os campos do formulário
           } catch (err) {
             console.error(err);
             alert("Erro ao solicitar o token.");
           }
        }


    return(
        <div>

            <form  onSubmit={handleSubmit(onSubmit)}>
            <Input
            type="text"
            label="Ocupação"
            name="occupationName"
            register={register}
            error={errors.occupationName}/>

            <TextArea
            rows={3} 
            placeholder="Descrição da ocupação" 
             {...register("descriptionOccupation")}
            error={errors.descriptionOccupation}/>


          <Checkbox 
          label="Possui periculosidade?" 
          register={register} 
          name="selectedOption" 
          />

           {errors.selectedOption && (
            <ErrorText>{errors.selectedOption.message}</ErrorText>
          )}
                   <SubmitButton type="submit"> Criar</SubmitButton>     

            </form>
        </div>
    )
}