-- CreateTable
CREATE TABLE "public"."BlogPost" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "authored_by" BIGINT NOT NULL,
    "chapter" BIGINT NOT NULL,

    CONSTRAINT "BlogPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Chapter" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Chapter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ChapterMember" (
    "id" BIGSERIAL NOT NULL,
    "student_id" BIGINT NOT NULL,
    "chapter_id" BIGINT NOT NULL,

    CONSTRAINT "ChapterMember_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Event" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "chapter" BIGINT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Role" (
    "id" BIGSERIAL NOT NULL,
    "access" VARCHAR(255) NOT NULL,
    "name" VARCHAR(255) NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Student" (
    "id" BIGSERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "graduation_year" DATE,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."StudentRole" (
    "id" BIGSERIAL NOT NULL,
    "student_id" BIGINT NOT NULL,
    "role_id" BIGINT NOT NULL,
    "assigned" DATE NOT NULL,

    CONSTRAINT "StudentRole_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."BlogPost" ADD CONSTRAINT "blogpost_authored_by_foreign" FOREIGN KEY ("authored_by") REFERENCES "public"."Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."BlogPost" ADD CONSTRAINT "blogpost_chapter_foreign" FOREIGN KEY ("chapter") REFERENCES "public"."Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."ChapterMember" ADD CONSTRAINT "chaptermember_chapter_id_foreign" FOREIGN KEY ("chapter_id") REFERENCES "public"."Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."ChapterMember" ADD CONSTRAINT "chaptermember_student_id_foreign" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."Event" ADD CONSTRAINT "event_chapter_foreign" FOREIGN KEY ("chapter") REFERENCES "public"."Chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."StudentRole" ADD CONSTRAINT "studentrole_role_id_foreign" FOREIGN KEY ("role_id") REFERENCES "public"."Role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "public"."StudentRole" ADD CONSTRAINT "studentrole_student_id_foreign" FOREIGN KEY ("student_id") REFERENCES "public"."Student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
