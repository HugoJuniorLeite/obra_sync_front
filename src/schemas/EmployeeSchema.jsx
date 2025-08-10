import { z } from "zod";

export const EmployeeSchema = z.object({
  employeeName: z.string().min(3, "Nome é obrigatório"),
  birthDate: z.string(),
  rgNumber: z.string(),
  cpfNumber: z.string(),
  phoneNumber: z.string(),
  adressNumber: z.string(),
  admissionDate: z.string(),

  driversLicense: z.boolean().default(false),

  cnhCategory: z.string().optional(),
  cnhNumber: z.string().optional(),
  cnhValidity: z.string().optional(),
  firstDriversLicense: z.string().optional(),
}).superRefine((data, ctx) => {
  if (data.driversLicense) {
    if (!data.cnhCategory) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Categoria da CNH é obrigatória",
        path: ["cnhCategory"],
      });
    }
    if (!data.cnhNumber) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Número da CNH é obrigatório",
        path: ["cnhNumber"],
      });
    }
    if (!data.cnhValidity) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Validade da CNH é obrigatória",
        path: ["cnhValidity"],
      });
    }
    if (!data.firstDriversLicense) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Data da 1ª habilitação é obrigatória",
        path: ["firstDriversLicense"],
      });
    }
  }
});
