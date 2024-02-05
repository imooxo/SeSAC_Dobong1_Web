-- 실습1 DDL
/*
DDL을 이용해 아래 테이블 완성하기 (테이블명:member)
*/

use dobong;
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


-- select >> from >> where >> group by >> having >> order by >> limit