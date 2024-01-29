-- CreateEnum
CREATE TYPE "OrderCategory" AS ENUM ('COMBOS', 'ACOMPANHAMENTOS', 'BEBIDAS', 'SOBREMESAS');

-- CreateEnum
CREATE TYPE "PaymentForm" AS ENUM ('DEBITO', 'CREDITO', 'DINHEIRO');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('FAZENDO', 'PRONTO');

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "product_id" INTEGER NOT NULL,
    "servations" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'FAZENDO',
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(10) NOT NULL,
    "form" "PaymentForm" NOT NULL DEFAULT 'DINHEIRO',
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "code_product" TEXT NOT NULL,
    "product_name" VARCHAR(255) NOT NULL,
    "product_description" VARCHAR(255) NOT NULL,
    "price" TEXT NOT NULL,
    "category" "OrderCategory" NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT timezone('America/Sao_Paulo'::text, (CURRENT_DATE)::timestamp with time zone),

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "order" ADD CONSTRAINT "order_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
