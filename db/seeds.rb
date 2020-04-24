# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

u1 = User.create!(description: 'this is the description part!', email: 'greg@mail.com', username: 'greg', password: 'gregspassword', photoURL: 'default' );
u2 = User.create!(description: 'this is the description part!', email: 'bob@mail.com', username: 'bob', password: 'bobspassword', photoURL: 'default' );
u3 = User.create!(description: 'this is the description part!', email: 'jim@mail.com', username: 'jim', password: 'jimspassword', photoURL: 'default' );
u4 = User.create!(description: 'this is the description part!', email: 'oscar@mail.com', username: 'oscar', password: 'oscarspassword', photoURL: 'default' );
u5 = User.create!(description: 'this is the description part!', email: 'anita@mail.com', username: 'anita', password: 'anitaspassword', photoURL: 'default' );
u6 = User.create!(description: 'this is the description part!', email: 'kevin@mail.com', username: 'kevin', password: 'kevinspassword', photoURL: 'default' );
u7 = User.create!(description: 'this is the description part!', email: 'cheryl@mail.com', username: 'cheryl', password: 'cherylspassword', photoURL: 'default' );
u8 = User.create!(description: 'this is the description part!', email: 'pam@mail.com', username: 'pam', password: 'pamspassword', photoURL: 'default' );
u9 = User.create!(description: 'this is the description part!', email: 'mike@mail.com', username: 'mike', password: 'mikespassword', photoURL: 'default' );
u10 = User.create!(description: 'this is the description part!', email: 'lana@mail.com', username: 'lana', password: 'lanaspassword', photoURL: 'default' );
u11 = User.create!(description: 'this is the description part!', email: 'lisa@mail.com', username: 'lisa', password: 'lisaspassword', photoURL: 'default' );