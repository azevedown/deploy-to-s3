import {
  StringSchema,
  StringSchemaConstructor,
} from 'yup';

declare module 'yup' {
  interface StringSchema {
    isCpfValid(msg: string): Ref | Schema<string, object> | MixedSchema<string, object>;
    isDatePtBrValid(msg: string): StringSchema;
    greaterThanAgeDatePtBr(ageParam: number, msg: string): StringSchema;
  }

}

export const string: StringSchemaConstructor;
