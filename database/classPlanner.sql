drop table if exists Module;
drop table if exists Lesson;
drop table if exists LessonRoleLink;
drop table if exists LessonRole;
drop table if exists UserLessonLink;


CREATE TABLE Module (
  UniqueID  SERIAL PRIMARY KEY,
  name      VARCHAR(30) NOT NULL,
  syllabusLink     VARCHAR(120) NOT NULL
  
);

CREATE TABLE Lesson (
  id        SERIAL PRIMARY KEY,
  Module_id      INT REFERENCES Module(UniqueID),
  name      VARCHAR(30) NOT NULL,
  syllabusLink     VARCHAR(120) NOT NULL,
  StartDate date,
  EndDate  date
);

CREATE TABLE LessonRoleLink (
  LessonId        INT  REFERENCES Lesson (id),
  LessonRoleId    INT  REFERENCES LessonRole(UniqueID),
  Capacity   INT NOT NULL,
   PRIMARY KEY (LessonId,LessonRoleId )
);

CREATE TABLE LessonRole (
  UniqueID      SERIAL PRIMARY KEY,
  name          VARCHAR(50) NOT NULL
);

CREATE TABLE UserLessonLink (
  LessonId        INT  REFERENCES Lesson (id),
  VolunteerEmail   VARCHAR (60) NOT NULL,
  RoleId   INT REFERENCES LessonRole(UniqueID),
  VolunteerName   VARCHAR (60) NOT NULL,
   PRIMARY KEY (LessonId,VolunteerEmail )

);

insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (1, 1, 1);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (2, 2, 3);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (3, 3, 4);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (1, 4, 4);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (3, 5, 1);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (3, 2, 1);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (2, 3, 5);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (4, 5, 2);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (1, 5, 3);
insert into LessonRoleLink (LessonId, LessonRoleId, Capacity) values (3, 4, 1);



insert into LessonRole  ( name) values ( 'Lead Teacher');
insert into LessonRole  ( name) values ( 'Assistant Lead Teacher');
insert into LessonRole  ( name) values ( 'Teaching Assistant');
insert into LessonRole  ( name) values ( 'Coordinator');
insert into LessonRole  ( name) values ( 'Personal Development Rep');




insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (1, 'dclubb0@baidu.com', 1, 'Diannne Clubb');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (2, 'drothermel1@yandex.ru', 2, 'Davita Rothermel');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (3, 'egrigoire2@tamu.edu', 1, 'Elysha Grigoire');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (4, 'bclere3@prlog.org', 4, 'Blaine Clere');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (4, 'bhaszard4@drupal.org', 5, 'Berrie Haszard');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (4, 'hburdass5@wsj.com', 5, 'Harlin Burdass');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (1, 'pchristian6@pen.io', 2, 'Pepita Christian');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (1, 'obenbow7@ibm.com', 3, 'Orson Benbow');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (2, 'thoyte8@bbb.org', 4, 'Tome Hoyte');
insert into UserLessonLink (LessonId, VolunteerEmail, RoleId, VolunteerName) values (2, 'eseton9@archive.org', 1, 'Evan Seton');




insert into Module (Name, syllabusLink) values ('Git and Github', 'vistaprint.com');
insert into Module (Name, syllabusLink) values ('HTML-CSS', 'prnewswire.com');
insert into Module (Name, syllabusLink) values ('JavaScript', 'wp.com');
insert into Module (Name, syllabusLink) values ('React', 'princeton.edu');
insert into Module (Name, syllabusLink) values ('Node', 'google.cn');



insert into Lesson (Module_id, name, syllabusLink , StartDate, EndDate) values (1, 'introduction to Git', 'mail.ru','01.07.2020', '20.07.2020');
insert into Lesson (Module_id, name, syllabusLink , StartDate, EndDate) values (1, 'Pull request', 'deviantart.com',  '06.80.2020', '21.08.2020');
insert into Lesson (Module_id, name, syllabusLink , StartDate, EndDate) values (2, 'introduction to HTML', 'photobucket.com', '09.09.2020', '21.09.2020');
insert into Lesson (Module_id, name, syllabusLink , StartDate, EndDate) values (3, 'Introduction to React', 'ucoz.com','02.10.2020', '30.10.2020');
insert into Lesson (Module_id, name, syllabusLink , StartDate, EndDate) values (3, 'Deploying React', 'arstechnica.com', '01.11.2020', '25.11.2020');
