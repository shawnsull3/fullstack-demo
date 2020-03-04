DROP DATABASE IF EXISTS bugsDB;

CREATE DATABASE bugsDB;

\c bugsDB;

CREATE TABLE bugs (
    id SERIAL PRIMARY KEY,
    description text,
    reporter text,
    createdOn text,  --change to auto generate later
    assignedTo text,
    threatLevel text
);

--fill in data

INSERT INTO bugs (description, reporter, createdOn, assignedTo, threatLevel)
    VALUES ('Async Swim needs to be fixed, desperately.', 'Bailey', '1/5/2020', 'Teddi', 'Critical');

INSERT INTO bugs (description, reporter, createdOn, assignedTo, threatLevel)
    VALUES ('Do you support the Phantom Thieves?', 'Jeff', '1/7/2020', 'Daniel', 'Low-Priority');
