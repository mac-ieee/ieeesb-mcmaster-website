/*
  Warnings:

  - Added the required column `description` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `long_description` to the `Chapter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `short_name` to the `Chapter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Chapter" ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "image" VARCHAR(255) NOT NULL,
ADD COLUMN     "long_description" TEXT NOT NULL,
ADD COLUMN     "short_name" VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE INDEX "Chapter_short_name_idx" ON "public"."Chapter"("short_name");

-- CreateIndex
CREATE INDEX "Role_access_name_idx" ON "public"."Role"("access", "name");

-- CreateIndex
CREATE INDEX "Student_email_idx" ON "public"."Student"("email");
