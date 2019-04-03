CREATE TABLE IF NOT EXISTS articles (
    id serial PRIMARY KEY,
    text varchar(255) NOT NULL UNIQUE,
    title varchar(255) NOT NULL 
    comments varchar(225) NOT NULL UNIQUE,
    user_name varchar(22) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
);                  

-- CREATE TABLE IF NOT EXISTS comments(
--     id serial PRIMARY KEY,
--     name varchar(255) NOT NULL UNIQUE, 
--     comments varchar(225) NOT NULL UNIQUE,
--     created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
--     updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
-- );                                                       


CREATE TABLE IF NOT EXISTS comments(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE, 
    comments varchar(225) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
);                                                       


CREATE TABLE IF NOT EXISTS videos (
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL, 
    comments varchar(225) NOT NULL UNIQUE,
    user_name varchar(22) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                           

CREATE TABLE IF NOT EXISTS  users(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL ,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                           

