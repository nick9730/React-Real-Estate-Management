import { z } from "zod";

export const schema = z.object({
  type: z.string({ message: "Το πεδίο είναι υποχρεωτικό" }),
  location: z.string({ message: "Το πεδίο είναι υποχρεωτικό" }),
  area: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseInt(val, 10);
      return val;
    },

    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gte(1, "Το εμβαδόν πρέπει να είναι από τετραψήφιο αριθμό και κάτω")
  ),
  bath: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseInt(val, 10);
      return val;
    },

    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gte(1, "Ο αριθμός   μπορεί να είναι μονοψήφιος αριθμός και πάνω")
  ),
  bed: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseInt(val, 10);
      return val;
    },

    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gte(1, "Ο αριθμός  μπορεί να είναι μονοψήφιος αριθμός και πάνω")
  ),
  posX: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseFloat(val);
      return val;
    },
    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gt(0, "Ο αριθμός  μπορεί να είναι μονοψήφιος αριθμός και πάνω")
  ),
  posY: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseFloat(val);
      return val;
    },
    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gt(0, "Ο αριθμός  μπορεί να είναι μονοψήφιος αριθμός και πάνω")
  ),
  price: z.preprocess(
    (val) => {
      if (typeof val === "string") return parseInt(val, 10);
      return val;
    },

    z
      .number({ message: "Το πεδίο είναι υποχρεωτικό" })
      .gt(1, "Ο αριθμός   μπορεί να είναι μονοψήφιος αριθμός και πάνω")
  ),
  description: z.string(),
});

export type FormValues = z.infer<typeof schema>;

export type FileProps = {
  name?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  size?: number;
  type?: string;
  webkitRelativePath?: string;
  preview?: string | undefined;
  index?: number;
};
