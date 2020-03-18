in sqllite table, do I add transmission type and/or title status?

npm install -g knex
knex
knex init

how to seed:
knex seed:make
knex seed:run

make sure table name is the same as table I'm modifying  in carsTable seed

knex migrate:new ** insert name here **
knex migrate:make 