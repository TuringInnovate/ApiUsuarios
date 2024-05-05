create database dbApiUsuarios;

use dbApiUsuarios;

create table usuarios(
    id_usu int primary key auto_increment,
    nome varchar(45),
    email varchar(45),
    senha varchar(20)
);

insert into usuarios (nome, email,senha) values ('Vitoria Fernandes', 'vitoriafernandes@gmail.com', 'vitoria123');
insert into usuarios (nome, email,senha) values ('Miguel Camargo', 'miguelcamargo@gmail.com', '456camargo');

select * from usuarios




