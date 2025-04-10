/*
  Warnings:

  - You are about to drop the column `concluida` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `criadaEm` on the `tasks` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `category` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `imageUrl` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ingredients` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prepTime` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `tasks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `tasks` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_tasks" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "category" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "prepTime" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_tasks" ("id") SELECT "id" FROM "tasks";
DROP TABLE "tasks";
ALTER TABLE "new_tasks" RENAME TO "tasks";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
