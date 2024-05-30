import { z } from "zod";

const roleName = z.union([z.literal("location"), z.literal("type")]);

export const roleNumber = z.union([
  z.literal("bath"),
  z.literal("bed"),
  z.literal("price"),
  z.literal("area"),
  z.literal(""),
]);
export const settingSchema = z.union([
  z.object({
    role: roleName,
    name: z
      .string({ message: "Το πεδίο είναι υποχρεωτικό" })
      .regex(
        /[Α-Ω]/,
        "Η ονομασία πρέπει να περιέχει τουλάχιστον ένα κεφαλαίο  και τονους"
      )
      .regex(/['άέίόώύή]/, "Η ονομασία πρέπει να περιέχει τονους")
      .regex(/[α-ω]/, "Η ονομασία πρέπει να περιέχει mikra"),
    number: z.number({ message: "Το πεδίο είναι υποχρεωτικό" }).nullish(),
  }),
  z.object({
    number: z.preprocess(
      (val) => {
        if (typeof val === "string") return parseInt(val, 10);
        return val;
      },

      z
        .number({ message: "Το πεδίο είναι υποχρεωτικό" })
        .gte(1, "O αριθμός πρέπει να είναι μεγαλύτερος του μηδενός")
    ),
    role: roleNumber,

    name: z.string().nullish(),
  }),
]);

export type FormValuesSettings = z.infer<typeof settingSchema>;
