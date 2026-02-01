-- CreateTable
CREATE TABLE "BlogPost" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "authored_by" BIGINT NOT NULL,
    "chapter" BIGINT NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Chapter" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "short_name" VARCHAR(100) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "long_description" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ChapterMember" (
    "id" BIGSERIAL NOT NULL,
    "student_id" BIGINT NOT NULL,
    "chapter_id" BIGINT NOT NULL,

    CONSTRAINT "ChapterMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "ieee_link" VARCHAR(255) NOT NULL,
    "registration_link" VARCHAR(255),
    "chapter" BIGINT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" BIGSERIAL NOT NULL,
    "access" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "major" VARCHAR(255) NOT NULL,
    "minor" VARCHAR(255),
    "profile_picture" VARCHAR(255),
    "entrance_year" DATE NOT NULL,
    "graduation_year" DATE,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "StudentRole" (
    "id" BIGSERIAL NOT NULL,
    "student_id" BIGINT NOT NULL,
    "role_id" BIGINT NOT NULL,
    "assigned" DATE NOT NULL,

    CONSTRAINT "StudentRole_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Chapter_short_name_idx" ON "Chapter"("short_name");

-- CreateIndex
CREATE INDEX "Role_access_name_idx" ON "Role"("access", "name");

-- CreateIndex
CREATE INDEX "Student_email_idx" ON "Student"("email");

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "blogpost_authored_by_foreign" FOREIGN KEY ("authored_by") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "BlogPost" ADD CONSTRAINT "blogpost_chapter_foreign" FOREIGN KEY ("chapter") REFERENCES "Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChapterMember" ADD CONSTRAINT "chaptermember_chapter_id_foreign" FOREIGN KEY ("chapter_id") REFERENCES "Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ChapterMember" ADD CONSTRAINT "chaptermember_student_id_foreign" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "event_chapter_foreign" FOREIGN KEY ("chapter") REFERENCES "Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "StudentRole" ADD CONSTRAINT "studentrole_role_id_foreign" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "StudentRole" ADD CONSTRAINT "studentrole_student_id_foreign" FOREIGN KEY ("student_id") REFERENCES "Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
