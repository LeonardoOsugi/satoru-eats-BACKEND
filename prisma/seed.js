import prisma from "../src/config/database.js";

async function main(){
    let product = await prisma.products.findFirst();
// id | image | product_name | product_description | price | category | created_at
    let products = [
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "1234",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "5678",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "9123",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "4567",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "8901",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "2468",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "1357",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "1997",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "2003",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "1900",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "1340",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
            {
                "image":"https://st2.depositphotos.com/5624298/8341/i/950/depositphotos_83416284-stock-photo-hamburger-on-white-background.jpg",
                "code": "8090",
                "product_name": "BURGUE",
                "product_description":"1X Hambúrguer 100g",
                "price":"4550",
                "category": "COMBOS"
            },
        ];

    if(!product){
        await prisma.products.createMany({
            data: products
        });
    };
}

main()
    .then(() => {
        console.log("Registro feito com sucesso!")
    })
    .catch( e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })