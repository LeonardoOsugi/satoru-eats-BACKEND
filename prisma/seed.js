import prisma from "../src/config/database.js";








async function main(){
 let product = await prisma.products.findFirst();
// id | image | product_name | product_description | price | category | created_at
 let products = [
         {
             "image":"https://cdn.pixabay.com/photo/2017/02/09/14/01/kebab-2052339_960_720.jpg",
             "code_product": "1234",
             "product_name": "BURGÃO FITNES",
             "product_description":"1X Hambúrguer 100g, com frango e peito de peru, alface, queijo, tomate e pão integral de brioche",
             "price":"6000",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2017/03/10/13/49/fast-food-2132863_960_720.jpg",
             "code_product": "5678",
             "product_name": "HOT DOG DO SATO",
             "product_description":"2x vina 50g, alface, tomate, cenoura ralada, batata frita, Bacon e pão de bisnaguinha",
             "price":"4550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2016/03/05/19/08/abstract-1238262_640.jpg",
             "code_product": "9123",
             "product_name": "HAMBURGUE DE CARANGUEIJO",
             "product_description":"1X 'Hambúrguer de Carangueijo' 100g, queijo, picles, catchup, tomate, cebola, alface, maionese e pão de gergelin",
             "price":"5050",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2012/03/02/11/00/hot-dog-21074_640.jpg",
             "code_product": "4567",
             "product_name": "SALSICHÃO GULOSO",
             "product_description":"1X SALSICHÃO 70g, catchup, mostarda, queijo ralado e pão de vina",
             "price":"3500",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2023/03/12/19/53/sandwich-7847723_640.png",
             "code_product": "8901",
             "product_name": "CATFISH",
             "product_description":"1X Hambúrguer de Bagre 100g, maionese, queijo e pão branco",
             "price":"4550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2017/04/04/16/25/hamburger-2201748_640.jpg",
             "code_product": "2468",
             "product_name": "ARRASA QUARTEIRÃO",
             "product_description":"1X Hambúrguer 110g, 2X Fatias de queijo, Picles, Cebola frita, molho especial e pão de gergelin",
             "price":"7550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2017/02/09/14/09/kebab-2052498_960_720.jpg",
             "code_product": "1357",
             "product_name": "WHOPPER CURIOSO",
             "product_description":"1X mistura de todas as carnes 100g, massa de kebab, alface, tomate e repolho",
             "price":"6050",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2016/03/05/21/39/batter-1239029_960_720.jpg",
             "code_product": "1997",
             "product_name": "PORÇÃO DE FLANGO FLITO COM ALFACE",
             "product_description":"1X Porção com 500g de Frango e 750g de alface",
             "price":"2550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2014/01/23/19/34/french-fries-250641_640.jpg",
             "code_product": "2003",
             "product_name": "PORÇÃO DE BATATA COM CATCHUP",
             "product_description":"1X Porção de 100g de batata frita com catchup",
             "price":"1050",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2017/02/01/08/57/food-2029118_960_720.jpg",
             "code_product": "1900",
             "product_name": "SUCOS DE LARANJA, UVA, MARACUJA E LIMONADA",
             "product_description":"1X Suco na jarra de 3L",
             "price":"1550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2016/07/24/16/39/beer-1538754_640.png",
             "code_product": "1340",
             "product_name": "CERVEJA ARTEZANAL",
             "product_description":"1X Copo de 500ml",
             "price":"2550",
             "category": "COMBOS"
         },
         {
             "image":"https://cdn.pixabay.com/photo/2017/08/01/17/34/smoothie-2566825_640.jpg",
             "code_product": "8090",
             "product_name": "MILKSHAKES DE ABACAXI, MARACUJÁ, MENTA E CHOCOLATE",
             "product_description":"1X Copo de 250ml",
             "price":"2000",
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
