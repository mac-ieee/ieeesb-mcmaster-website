/*
  Warnings:

  - Added the required column `description` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `major` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Student" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "entrance_year" DATE,
ADD COLUMN     "major" VARCHAR(255) NOT NULL,
ADD COLUMN     "minor" VARCHAR(255),
ADD COLUMN     "profile_picture" VARCHAR(255);
