CREATE DATABASE mlb_db;

\c mlb_db;

DROP TABLE teams;
DROP TABLE batters;
DROP TABLE pitchers;
DROP TABLE news_table;

CREATE TABLE batters (
    Name VARCHAR(255),
    Team VARCHAR(255),
    G INT,
    PA INT,
    AB INT,
    H INT,
    Column_2B INT,
    Column_3B INT,
    HR INT,
    R INT,
    RBI INT,
    BB INT,
    SO INT,
    HBP INT,
    SB INT,
    CS INT,
    AVG NUMERIC(3, 3),
    OBP NUMERIC(3, 3),
    SLG NUMERIC(3, 3),
    OPS NUMERIC(4, 3),
    wOBA NUMERIC(3, 3),
    Fld NUMERIC(3, 1),
    BsR NUMERIC(2, 1),
    WAR NUMERIC(2, 1),
    ADP NUMERIC(4, 1),
    playerid VARCHAR(255) PRIMARY KEY,
    drafted BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE pitchers (
    Name VARCHAR(255),
    Team VARCHAR(255),
    W NUMERIC(3, 1),
    L NUMERIC(3, 1),
    ERA NUMERIC(3, 2),
    GS NUMERIC(3, 1),
    G NUMERIC(3, 1),
    SV NUMERIC(3, 1),
    IP NUMERIC(4, 1),
    H NUMERIC(4, 1),
    ER NUMERIC(4, 1),
    HR NUMERIC(3, 1),
    SO NUMERIC(4, 1),
    BB NUMERIC(3, 1),
    WHIP NUMERIC(3, 2),
    K_9 NUMERIC(4, 2),
    BB_9 NUMERIC(4, 2),
    FIP NUMERIC(3, 2),
    WAR NUMERIC(2, 1),
    RA9_WAR NUMERIC(2, 1),
    ADP NUMERIC(4, 1),
    playerid VARCHAR(255) PRIMARY KEY,
    drafted BOOLEAN NOT NULL DEFAULT FALSE
);
CREATE TABLE teams(
  Name VARCHAR(255),
  Team VARCHAR(255),
  playerid VARCHAR(255) PRIMARY KEY
);
