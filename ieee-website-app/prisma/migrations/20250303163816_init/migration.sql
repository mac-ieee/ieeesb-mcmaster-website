/*
  Warnings:

  - You are about to drop the column `fileContent` on the `Announcements` table. All the data in the column will be lost.
  - Added the required column `descriptionContent` to the `Announcements` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Announcements` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcements" DROP COLUMN "fileContent",
ADD COLUMN     "chapter" TEXT,
ADD COLUMN     "descriptionContent" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
