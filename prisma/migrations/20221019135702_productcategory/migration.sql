-- CreateTable
CREATE TABLE "productcategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "id_product" TEXT NOT NULL,
    "id_category" TEXT NOT NULL,
    CONSTRAINT "productcategory_id_product_fkey" FOREIGN KEY ("id_product") REFERENCES "product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "productcategory_id_category_fkey" FOREIGN KEY ("id_category") REFERENCES "category" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
