create Database demo ;
use demo ; 

create table `UserAuth` ( `id` INT(11) NOT NULL AUTO_INCREMENT ,
     `emailId` VARCHAR(255) NOT NULL ,
     `username` VARCHAR(255) NOT NULL ,
    `password` VARCHAR(255) NOT NULL ,
    `createdAt` TIMESTAMP default CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`) )
    AUTO_INCREMENT = 1 ;

insert into `UserAuth` (emailId, username , password ) values ('test123@gmail.com', 'test123' , 'test@123') ; 