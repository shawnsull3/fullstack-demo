DROP DATABASE IF EXISTS bugs;

CREATE DATABASE bugs;

\c bugs;

CREATE TABLE bugs (
    "bugName" SERIAL PRIMARY KEY,
    "bugDescription" text,
    "reportedBy" text,
    "createdDate" text,  --change to auto generate later
    "assignedTo" text,
    "threatLevel" text
);

--fill in data

INSERT INTO bugs ("bugDescription", "reportedBy", "createdDate", "assignedTo", "threatLevel")
    VALUES ('Async Swim needs to be fixed, desperately.', 'Bailey', '1/5/2020', 'Teddi', 'Critical');

INSERT INTO bugs ("bugDescription", "reportedBy", "createdDate", "assignedTo", "threatLevel")
    VALUES ('Do you support the Phantom Thieves?', 'Jeff', '1/7/2020', 'Daniel', 'Low-Priority');
