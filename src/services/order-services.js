import orderRepositories from "../repositories/order-repositories.js";

async function postOrder({product_id, servations,status, form, name, code}){

        const objeto = {
            data:{product_id: parseInt(product_id), servations, status, name, code, form}
        }

        return await orderRepositories.postOrder({objeto});
}

async function getOrderFazendo(){
    const fazendo = await orderRepositories.getOrderFazendo();

    if(!fazendo) throw new Error("Not Found");

    return fazendo
}

async function getOrderPronto(){
    const pronto = await orderRepositories.getOrderPronto();

    if(!pronto) throw new Error("Not Found");

    return pronto
}

async function getOrderName({name}){
    const order =  await orderRepositories.getOrderName({name})

    if(!order) throw new Error("Not Found");

    return order;
}

async function updateOrder({id}){
    const idExist = await orderRepositories.getOrderId({id});
    const updateCarried = await orderRepositories.updateOrder({id});

    if(!idExist) throw new Error("Id não encontrado");
    if(idExist.status === "PRONTO") throw new Error("Produto já esta com o status de PRONTO")
    if(!updateCarried) throw new Error("Update não realizado")

    return updateCarried;
}

async function deleteOrder({id}){
    const idExist = await orderRepositories.getOrderId({id});
    const deleteOr  = await orderRepositories.deleteOrder({id});

    if(!idExist) throw new Error("Id não encontrado");
    if(!deleteOr) throw new Error("Item não deletado")

    return deleteOr;
}
export default {
    postOrder,
    getOrderFazendo,
    getOrderPronto,
    getOrderName,
    updateOrder,
    deleteOrder
}
