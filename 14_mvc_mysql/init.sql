-- Active: 1707101282876@@127.0.0.1@3306@sesac
show tables;
create table visitor(
    id int PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);


DESC visitor;

insert into visitor(name, comment) VALUES("jade","hi~");
insert into visitor values(null, "홍길동","홍길동 입니다.");

SELECT * from visitor;

##### [DCL] #####
-- 새로운 user만들기 1
CREATE USER "sesac"@"%" IDENTIFIED BY 'rpass';
alter user "sesac"@"%" IDENTIFIED with mysql_native_password BY "rpass";
-- 비밀번호를 바꾸고 싶을때!

-- 새로운 user만들기 2
create user "sesac"@"%" IDENTIFIED with mysql_native_password by "rpass";

##권한주기
GRANT all PRIVILEGES on *.* to "sesac"@"%" with GRANT option;
-- 모든 DB에 접근 가능하도록, sesac 계정에 DB접근에 권한을 부여

FLUSH PRIVILEGES;
-- 현재 사용중인 mysql 캐시를 지우고 새로운 설정 적용