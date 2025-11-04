import z from "zod";

 const update = z.object({
  body: z.object({
    name: z.string().nonempty("name can not be empty").optional(),
    contactNumber: z.string().optional(),
  }) ,
});

export const adminValidationSchemas={
update
}
