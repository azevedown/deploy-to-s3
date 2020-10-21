import { DateHelper, NumberHelper } from "c4u-web-components";
import { parse } from "date-fns";

export class Type {
  static toStringNull(value: any): string | null {
    try {
      if (value) {
        return value.toString().trim();
      }
    } catch (error) {
      console.log(error);
    }

    return null;
  }
  static toNumberNull(value: any): number | null {
    try {
      const val = NumberHelper.toNumber(value);
      if (!isNaN(val)) return val;
    } catch (error) {
      console.log(error);
    }

    return null;
  }
  static toDateNull(value: any): Date | null {
    try {
      if (value) {
        let dateLocal = value;
        if (typeof value === "string") {
          if (dateLocal.match(/\d{2}\/\d{2}\/\d{4}.*/))
            dateLocal = parse(value, "dd/MM/yyyy", new Date());

          if (dateLocal.match(/\d{4}-\d{2}-\d{2}.*/))
            dateLocal = parse(value, "yyyy-MM-dd", new Date());
        }

        if (value instanceof Date) {
          return DateHelper.toDateHourFixed(dateLocal);
        }
      }
    } catch (error) {
      console.log(error);
    }

    return null;
  }
}
