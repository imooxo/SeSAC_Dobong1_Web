-- -----------DATABASE 관련 명령어
-- DB 목록 확인
SHOW DATABASES;

-- 한줄 주석
/* 여러줄 주석 */

-- DATABASE 삭제
DROP DATABASE sesac;
DROP DATABASE mydatabase;

-- CREATE : DATABASE 생성
create database sesac DEFAULT CHARACTER set utf8 COLLATE utf8_general_ci;
/*
dobong 이라는 데이터베이스를 생성하는데,
문자열셋으로 utf8mb4를, 콜레이션으로 utf8_general_ci를 사용함!
utfmb4는 utf8보다 더 많은 문자 지원(일부 이모지를 저장 가능)
>> 이모지를 저장하는 DB라면 utf8mb4 저장, 이모지를 저장하지 않아도 된다면 utf8로 저장
*/
create database dobong character set utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 이 데이터베이스를 사용하겠다!(USE 명령어, 데이터 베이스 사용 선언)
USE sesac;

-- -----------table 관련 명령어
-- 1. table 생성
/*
create table products(
    생성할 속성1 값형식 제약조건,
    속성2 값형식 제약조건
)
create table products(
    id 값형식 제약조건,
    name 값형식 제약조건,
    model_model 값형식 제약조건,
    series 값형식 제약조건,
)
*/
-- 제약조건
-- NOT NULL : NULL 허용X
-- AUTO_INCREMENT : 자동 숫자 증가
-- PRIMARY KEY :  기본키(중복 허용X, NULL값 허용X), 한 테이블에 한개만
-- DEFAULT : 기본값
-- UNIQUE : 중복허용X, NULL값 허용O, 한 테이블에 여러개 가능
create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_model VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- table 목록 확인
show tables;
-- products 테이블에 어떤 컬럼이 있는지 확인(테이블 구조를 확인할 수 있는 명령어)
desc products;

-- table 전체 삭제
drop table products;
-- table 정보만을 삭제
TRUNCATE TABLE products;

-- table 변경(수정) ALTER
-- 1. 컬럼 추가 ADD 
ALTER TABLE products ADD new_column VARCHAR(20);
-- 2. 특정 컬럼 수정 MODIFY (VARCHAR를 INT로 수정)
ALTER TABLE products MODIFY new_column INT;
-- 3. 특정 컬럼 삭제 DROP
ALTER TABLE products DROP new_column;

-- -----------DML
-- DATA mainpulation language(데이터 조작어)
/*user TABLE(id: not null AUTO_INCREMENT PRIMARY KEY, 
name:VARCHAR(10) NOT NULL, 
age: INT NOT NULL, 
address" VARCHAR(100))
*/
create table user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

show tables;
desc user;

-- CREATE(데이터 추가) >> INSERT INTO
--INSERT INTO 테이블이름(칼럼1, 칼럼2,...)VALUES(값1, 값2, ...);
INSERT INTO user(name, age, address) VALUES('ZEZE','8','서울 특별시 마포구');
INSERT INTO user(name, age, address) VALUES('totoca','7','서울 특별시 강서구');
INSERT INTO user(name, age, address) VALUES('minguinho','29','서울 특별시 강동구');
INSERT INTO user(name, age, address) VALUES('paulo','17','대구광역시 동구');
INSERT INTO user(name, age, address) VALUES('extefania','33','부산광역시 관악구');
INSERT INTO user(name, age, address) VALUES('jandira','23','서울특별시 노원구');
INSERT INTO user(name, age, address) VALUES('gloria','26','서울특별시 노원구');
INSERT INTO user(name, age, address) VALUES('lala','4','부산광역시 동구');
INSERT INTO user(name, age, address) VALUES('antonio','10','강원도 강릉시');
INSERT INTO user(name, age, address) VALUES('luis','20','부산광역시 중구');
INSERT INTO user(name, age, address) VALUES('edmundo','43','서울특별시 관악구');



-- 1. table 전체 조회
SELECT * FROM USER;

--2. 데이터 수정
--UPDATE 테이블이름 SET 데이터 어떻게 수정할건지 where 어떤 데이터를;
update user set name="Edmundo" where id=11;
update user set name="zeze" where id=12;
update user set name="estefania" where id=5;

--3. 데이터 삭제
-- DELETE FORM 테이블이름 where 삭제조건;
DELETE FROM user where id=1; -- where 이후 조건에 따른 데이터 삭제
DELETE FROM user; -- 전체 데이터 삭제

-- 'x'인 사람 지우기 >> 전체 데이터 조회
delete from user where name like 'l%';
select * from user;


--4. 데이터 조회(READ) select ~from ~
-- * : 전체를 의미
select * from user; --user 테이블에서 전체 컬럼 조회
select name from user; -- 이름 컬럼만 조회
select name, age from user; -- 이름과 나이 컬럼 조회


-- where절로 조건 적용
select * from user where age >= 25; 
select * from user where id = 3; 
select name from user where id=3;
select id, age from user where name="zeze";

-- order by : 데이터 정렬
-- dese : 내림차순
-- asc : 오름차순(default)
select * from user order by age desc; -- 많은 나이~적은 나이 기준으로 정렬
select * from user where id >6 order by age; -- 적은 나이~많은 나이 기준으로 정렬

-- LIKE: 문자열 패턴 조회(where와 함께 쓰임)
-- '서울로 시작하는 주소 찾기'
select * from user where address LIKE '서울%'

-- 이름의 마지막 글자가 'a'인 사람
select * from user where name LIKE '%a';


-- 주소에 광역시가 들어가는 사람
select * from user where address LIKE '%광역%';

-- 이름에 'o'가 들어는 사람 이름컬럼만 조회, age 기준 내림차순 정렬
select name from user where name LIKE'%o%';


-- LIMIT : 데이터의 개수 제한
select * from user LIMIT 3;
select * from user where address LIKE '서울%' LIMIT 2;


-- BETWEEN A AND B: A와 B의 사이값 조회(A,B는 포함)
select * from user where age BETWEEN 25 AND 30;
-- IN(리스트): 리스트의 요소와 일치하면 참
select * from user where age in(20,21,22,23)

-- IS NULL / IS NOT NULL
INSERT INTO user(name,age) VALUES('xururuca',31);
select * from user where address is null;
select name,address from user where address is not null;


-- 논리 연산자: AND, OR, NOT
-- 주소가 NULL이 아니면서 age가 25보다 큰 전체 속성 검색
select * from user where address is not null AND age > 25;
select * from user where address is not null OR age > 25;

-- 'l'이 이름에 들어가고 나이가 20살인 사람(이름 속성만 출력)
select name from user where name LIKE 'l%' and age=20;


-- distinct(중복 튜플 제거)
select age from user;
select distinct age from user;
