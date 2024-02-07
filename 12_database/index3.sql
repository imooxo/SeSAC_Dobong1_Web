show databases;
use dobong;

CREATE TABLE A_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

CREATE TABLE B_university(
    id VARCHAR(15) PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT(3) NOT NULL
);

desc A_university;
desc B_university;
DROP TABLE if EXISTS subject; 
CREATE TABLE subject(
    register_id int PRIMARY KEY AUTO_INCREMENT,
    id VARCHAR(15) NOT NULL,
    subject VARCHAR(30) NOT NULL
);

INSERT INTO A_university VALUES('20115544','a',34);
INSERT INTO A_university VALUES('20156677','b',31);
INSERT INTO A_university VALUES('20227755','c',25);
INSERT INTO A_university VALUES('20232223','d',23);
INSERT INTO A_university VALUES('20201144','e',23);
INSERT INTO A_university VALUES('20145145','f',30);
INSERT INTO A_university VALUES('20180919','g',26);

INSERT INTO B_university VALUES('2022091994','h',29);
INSERT INTO B_university VALUES('2020101021','i',23);
INSERT INTO B_university VALUES('2018187566','j',26);

INSERT INTO subject VALUES(NULL,'20115544','네트워크');
INSERT INTO subject VALUES(NULL,'20115544','알고리즘');
INSERT INTO subject VALUES(NULL,'20156677','알고리즘');
INSERT INTO subject VALUES(NULL,'20227755','네트워크');
INSERT INTO subject VALUES(NULL,'20232223','C언어');
INSERT INTO subject VALUES(NULL,'20145145','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','캡스톤');
INSERT INTO subject VALUES(NULL,'20180919','C언어');
INSERT INTO subject VALUES(NULL,'20180919','네트워크');
INSERT INTO subject VALUES(NULL,'2022091994','C언어');
INSERT INTO subject VALUES(NULL,'2022091994','캡스톤');
INSERT INTO subject VALUES(NULL,'2022091994','웹프레임워크');
INSERT INTO subject VALUES(NULL,'2018187566','C언어');
INSERT INTO subject VALUES(NULL,'2018187566','네트워크');
INSERT INTO subject VALUES(NULL,'2018187566','캡스톤');

select * from a_university;
select * from b_university;
select * from subject;

-- join
-- 1. inner JOIN
SELECT *
FROM A_university INNER JOIN subject
ON A_university.id=subject.id;

SELECT *
FROM A_university, subject
where A_university.id=subject.id;

-- 2. left outer JOIN
SELECT *
FROM A_university LEFT OUTER JOIN subject
ON A_university.id=subject.id;


-- 3. right outer JOIN
SELECT *
FROM A_university RIGHT OUTER JOIN subject
ON A_university.id=subject.id;

-- 4. natural join
SELECT *
FROM A_university NATURAL JOIN subject;