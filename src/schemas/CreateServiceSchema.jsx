import { z } from "zod";

export const CreateServiceSchema = z.object({
  serviceName: z
    .string()
    .min(2, "O nome do cliente deve ter pelo menos 2 caracteres"),

  descriptionService: z
    .string()
    .min(15, "O nome do cliente deve ter pelo menos 2 caracteres"),

  priceService: z
    .number({ invalid_type_error: 'Digite um valor numérico válido' })
    .min(0.01, 'O valor deve ser maior que zero'),

  selectedOption: z
    .string()
    .min(1, "Selecione um cliente válido")

});
