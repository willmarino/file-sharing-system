# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!(description: 'this is the description part!', email: 'greg@mail.com', username: 'greg', password: 'gregspassword' );
User.create!(description: 'this is the description part!', email: 'bob@mail.com', username: 'bob', password: 'bobspassword' );
User.create!(description: 'this is the description part!', email: 'jim@mail.com', username: 'jim', password: 'jimspassword' );
User.create!(description: 'this is the description part!', email: 'oscar@mail.com', username: 'oscar', password: 'oscarspassword' );
User.create!(description: 'this is the description part!', email: 'anita@mail.com', username: 'anita', password: 'anitaspassword' );
User.create!(description: 'this is the description part!', email: 'kevin@mail.com', username: 'kevin', password: 'kevinspassword' );
User.create!(description: 'this is the description part!', email: 'cheryl@mail.com', username: 'cheryl', password: 'cherylspassword' );
User.create!(description: 'this is the description part!', email: 'pam@mail.com', username: 'pam', password: 'pamspassword' );
User.create!(description: 'this is the description part!', email: 'mike@mail.com', username: 'mike', password: 'mikespassword' );
User.create!(description: 'this is the description part!', email: 'lana@mail.com', username: 'lana', password: 'lanaspassword' );