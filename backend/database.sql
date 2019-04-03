CREATE TABLE IF NOT EXISTS users(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL ,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);

CREATE TABLE IF NOT EXISTS chats(
    id serial PRIMARY KEY,
    messages varchar(225) NOT NULL,
    sender_id  INT REFERENCES users(id),
    receiver_id INT REFERENCES users(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);     
CREATE TABLE IF NOT EXISTS articles(
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL UNIQUE,
    user_id INT REFERENCES users(id) UNIQUE,
    flag INT NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                               
CREATE TABLE IF NOT EXISTS articles_comments(
    id serial PRIMARY KEY,
    comment varchar(255),
    commenters_id INT REFERENCES users(id),
    commented_item INT REFERENCES articles(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS articles_likes(
    id serial PRIMARY KEY,
    liked_articles_id INT REFERENCES users(id),
    liked_item INT REFERENCES articles(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    CONSTRAINT u_constraint UNIQUE ( liked_articles_id, liked_item)
);
CREATE TABLE IF NOT EXISTS tagged_article(
    id serial PRIMARY KEY,
    tagged_article_id INT REFERENCES users(id),
    tagged_item INT REFERENCES articles(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS bookmark(
   id serial PRIMARY KEY,
   article_id INT REFERENCES articles(id),
   user_id INT REFERENCES users(id),
   created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
   updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS videos(
    id serial PRIMARY KEY,
    title varchar(255) NOT NULL ,
    users_id INT REFERENCES users(id),
    flags INT NOT NULL,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                                                                                                                                                                                                                                                                           
CREATE TABLE IF NOT EXISTS videos_comments(
    id serial PRIMARY KEY,
    comment varchar(255),
    commented_id INT REFERENCES users(id),
    commented_item INT REFERENCES videos(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL

);
CREATE TABLE IF NOT EXISTS videos_likes(
    id serial PRIMARY KEY,
    liked_video_id INT REFERENCES users(id),
    liked_item INT REFERENCES videos(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);
CREATE TABLE IF NOT EXISTS tagged (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL UNIQUE, 
    comments varchar(225) NOT NULL UNIQUE,
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);                                                       
CREATE TABLE IF NOT EXISTS tagged_video(
    id serial PRIMARY KEY,
    tagged_video_id INT REFERENCES users(id),
    tagged_item INT REFERENCES videos(id),
    created_at timestamp NOT NULL DEFAULT NOW() NOT NULL,
    updated_at timestamp NOT NULL DEFAULT NOW() NOT NULL
);


INSERT INTO users(name) VALUES ('moral');
INSERT INTO users(name) VALUES ('tata');







