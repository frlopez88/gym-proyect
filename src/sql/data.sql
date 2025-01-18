create table trainer (
  trainer_id serial primary key,
  name text,
  phone_number text,
  specialization text
  
);

-- Simple Insert
insert into trainer
(name, phone_number, specialization)
values 
('Bruce Banner', '12398123', 'Power Lift');

-- Bulk Insert
insert into trainer
(name, phone_number, specialization)
values 
('Bruce Wayne', '12312334', 'Kung Fu'),
('Diana Prince', '88982133', 'Lasso of Truth');

--- Table Class
create table class (
  class_id serial primary key,
  name text, 
  start_date date,
  start_time time,
  trainer_id int, 
  constraint fk_trainer_1 foreign key (trainer_id) references trainer(trainer_id)
);


insert into class 
(name, start_date, start_time, trainer_id)
values
('Lifting', '01-jan-2025', '08:00', 1);

insert into class 
(name, start_date, start_time, trainer_id)
values
('Boxing', '01-jan-2025', '09:00', 2), 
('Zumba', '01-jan-2025', '10:00', 3);