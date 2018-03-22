CREATE DATABASE mlb_db;

\c mlb_db;

DROP TABLE player_table;

CREATE TABLE player_table (
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
    playerid BIGSERIAL PRIMARY KEY
);
