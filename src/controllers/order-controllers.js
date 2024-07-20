import orderServices from "../services/order-services.js";



export async function postOrder(req, res){
    console.log(req.body, "req.body");
    const {product_id, servations,status, form, name, code} = req.body;
    try{
        const order = await orderServices.postOrder({product_id, servations,status, form, name, code})

        return res.json(order);

    }catch(e){
        console.log(e);
        res.status(400).send(e);
    }
}


export async function getOrderFazendo(req, res){
    try{
        const order = await orderServices.getOrderFazendo();

        res.status(200).json(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getOrderPronto(req, res){
    try{
        const order = await orderServices.getOrderPronto();

        res.status(200).json(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function getOrderName(req, res){
    const name = req.params.name
    try{
        const order = await orderServices.getOrderName({name})

        res.status(200).json(order);
    }catch(e){
        res.status(500).send(e);
    }
}

export async function updateOrder(req, res){
    const id = +req.params.id; 
    try{ 
        const update = await orderServices.updateOrder({id})

        res.status(200).json(update)
    }catch(e){
        res.status(500).send(e)
    }
}

export async function deleteOrder(req, res){
    const id = +req.params.id;
    try{ 
        const order =  await orderServices.deleteOrder({id})
        res.status(200).json(order);
    }catch(e){
        console.error(e);
        res.status(500).send(e)
    }
}