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


-- 실습1 DDL
/*
DDL을 이용해 아래 테이블 완성하기 (테이블명:member)
*/
create table member(
    id VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) default 'x'  
);
desc member;
select * from member;

-- 실습2 DDL
/*
이전 실습에서 생성한 member 테이블을 ALTER 명령어를 이용해 구조변경
*/
ALTER table member MODIFY id VARCHAR(10);
ALTER table member DROP age;
ALTER table member ADD interest VARCHAR(100);
desc member;

-- 실습3 CREATE문
/* 조건에 만족하는 user 데이블 생성
ENUM("여자","남자"): 타입을 만들어주는것
1. 테이블명:user
2. 컬럼 설명 > 컬럼명, 종류(길이), 비고 순
*/
create table user2(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F','M','') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);
desc user2;


-- 실습4 INSERT문
/* 
user2 테이블에서 INSERT문을 이용해 데이터 추가
회원명부 > id, pw, name, gender, birthday, age 순
SELECT * FROM user2 명령어를 이용해 모든 회원 목록 출력
*/
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31',33);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31',31);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02',53);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18',39);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('widowmaker', '38wifh3', '위도우', 'F', '1976-06-27',47);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03',22);
INSERT INTO user2(id,pw,name,gender,birthday,age) VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11',24);
select * from user2;

-- 실습5 SELECT문
/* user2 테이블에서 다음 조건을 만족하는 SQL문 작성하기
1. 모든 회원목록을 가져오는데 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오기
2. 회원 목록중 gender 컬럼의 길이 'M'인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬
3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록을 보여주기
4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오기
5. gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오기
6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데 그때 처음 3개의 레코드만 가져오기
7. 모든 회원목록 중 나이가 25이상 50 이하인 회원의 목록을 출력하기
8. id 칼럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경하기
9. id 칼럼의 값이 jungkrat인 레코드를 삭제하기
*/
-- 1. 모든 회원목록을 가져오는데 birthday 컬럼의 값을 기준으로 오름차순 정렬하여 가져오기
select * from user2 ORDER BY birthday;

-- 2. 회원 목록중 gender 컬럼의 길이 'M'인 회원목록을 가져오는데, 이때 name 컬럼의 값을 기준으로 내림차순 정렬
select * from user2 where gender LIKE 'M' ORDER BY name DESC;

-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록을 보여주기
select id,name from user2 where birthday LIKE '1990%';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬하여 가져오기
select * from user2 where birthday LIKE '%-06-%' ORDER BY birthday ASC;

-- 5. gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록을 가져오기
select * from user2 where gender LIKE 'M' AND birthday LIKE '1970%'

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데 그때 처음 3개의 레코드만 가져오기
select * from user2 ORDER BY age DESC LIMIT 3

-- 7. 모든 회원목록 중 나이가 25이상 50 이하인 회원의 목록을 출력하기
select * from user2 where age BETWEEN 25 AND 50

-- 8. id 칼럼의 값이 hong1234인 레코드의 pw 컬럼의 값을 12345678로 변경하기
update user2 set pw = '12345678' where id='hong1234';
select * from user2

-- 9. id 칼럼의 값이 jungkrat인 레코드를 삭제하기
DELETE from user2 where id = 'jungkrat';
select * from user2
