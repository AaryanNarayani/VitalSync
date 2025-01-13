import zod from 'zod';

export const setInfoSchema = zod.object({
    name: zod.string().optional(),
    height: zod.number().optional(),
    weight: zod.number().optional(),
    gender: zod.string().optional(),
    age: zod.number().optional(),
})