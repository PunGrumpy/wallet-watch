import { Currencies } from "@/lib/currencies";
import { z } from "zod";

export const UpdateUserCurrencySchema = z.object({
  currency: z.custom((value) => {
    const currency = Currencies.find((c) => c.value === value);
    if (!currency) {
      throw new Error(`Currency ${value} is not supported`);
    }

    return value;
  }),
});
