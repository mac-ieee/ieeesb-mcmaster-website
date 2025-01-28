-- init.sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password)
VALUES ('test@example.com', 'password123');


-- docker exec -it {container id} psql -U postgres