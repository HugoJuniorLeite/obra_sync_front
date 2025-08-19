import { z } from "zod";

export const CreateOccupationSchema = z.object({
  occupationName: z.string().min(1, "Ocupação é obrigatória"),
  descriptionOccupation: z.string().min(1, "Descrição é obrigatória"),
  selectedOption: z.boolean({
    required_error: "Selecione Sim ou Não para periculosidade"
  }),

});
