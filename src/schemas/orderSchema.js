import joi from "joi";


export const orderSchema = joi.object({
    product_id: joi.number().required(), 
    servations: joi.string().required(),
    status: joi.string().required(), 
    form:joi.string().required(), 
    name:joi.string().required(), 
    code:joi.string().required()
})