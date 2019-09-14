# try-bookshelf

Try Bookshelf ORM

# tl;dr

    docker-compose up -d
    cd javascript
    npm install
    npm install -g knex
    knex migrate:up
    npm start
    
Log in to DB at http://localhost:8080
    
# Enhancing model

Create new model file, then create migration script

    npm install -g knex
    knex migrate:make create_thing
    
Then enhance migration script to match model
    
# Clean up

    docker-compose down --rmi all