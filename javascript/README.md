# try-bookshelf-javascript

Try Bookshelf ORM with JavaScript
    
# Enhancing model

Create new model file, then create migration script

    npm install -g knex
    knex migrate:make create_thing
    
Then enhance migration script to match model
    
# Clean up

    docker-compose down --rmi all