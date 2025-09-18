CREATE TABLE "Student"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "graduation_year" DATE NULL
);
ALTER TABLE
    "Student" ADD PRIMARY KEY("id");
CREATE TABLE "Role"(
    "id" BIGINT NOT NULL,
    "access" VARCHAR(255) CHECK
        ("access" IN('')) NOT NULL,
        "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Role" ADD PRIMARY KEY("id");
CREATE TABLE "StudentRole"(
    "id" BIGINT NOT NULL,
    "student_id" BIGINT NOT NULL,
    "role_id" BIGINT NOT NULL,
    "assigned" DATE NOT NULL
);
ALTER TABLE
    "StudentRole" ADD PRIMARY KEY("id");
CREATE TABLE "Chapter"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL
);
ALTER TABLE
    "Chapter" ADD PRIMARY KEY("id");
CREATE TABLE "ChapterMember"(
    "id" BIGINT NOT NULL,
    "student_id" BIGINT NOT NULL,
    "chapter_id" BIGINT NOT NULL
);
ALTER TABLE
    "ChapterMember" ADD PRIMARY KEY("id");
CREATE TABLE "Event"(
    "id" BIGINT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATE NOT NULL,
    "chapter" BIGINT NOT NULL
);
ALTER TABLE
    "Event" ADD PRIMARY KEY("id");
CREATE TABLE "BlogPost"(
    "id" BIGINT NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "authored_by" BIGINT NOT NULL,
    "chapter" BIGINT NOT NULL
);
ALTER TABLE
    "BlogPost" ADD PRIMARY KEY("id");
ALTER TABLE
    "ChapterMember" ADD CONSTRAINT "chaptermember_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "Student"("id");
ALTER TABLE
    "StudentRole" ADD CONSTRAINT "studentrole_role_id_foreign" FOREIGN KEY("role_id") REFERENCES "Role"("id");
ALTER TABLE
    "BlogPost" ADD CONSTRAINT "blogpost_authored_by_foreign" FOREIGN KEY("authored_by") REFERENCES "Student"("id");
ALTER TABLE
    "Event" ADD CONSTRAINT "event_chapter_foreign" FOREIGN KEY("chapter") REFERENCES "Chapter"("id");
ALTER TABLE
    "StudentRole" ADD CONSTRAINT "studentrole_student_id_foreign" FOREIGN KEY("student_id") REFERENCES "Student"("id");
ALTER TABLE
    "ChapterMember" ADD CONSTRAINT "chaptermember_chapter_id_foreign" FOREIGN KEY("chapter_id") REFERENCES "Chapter"("id");
ALTER TABLE
    "BlogPost" ADD CONSTRAINT "blogpost_chapter_foreign" FOREIGN KEY("chapter") REFERENCES "Chapter"("id");