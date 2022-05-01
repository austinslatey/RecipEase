const seedUsers = require('./seedUser');
const seedRecipe = require('./seedRecipe');


// const uuid = require('uuid/v4'); 

const bcrypt = require('bcrypt');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert(
            'Users',
            [
                {
                    id: '0',
                    userName: 'gterrans0',
                    email: 'tmaffezzoli0@squidoo.com',
                    password: 'JBCiJr0'
                },
                {
                    id: '1',
                    userName: 'dblaszkiewicz1',
                    email: 'nmartinet1@nba.com',
                    password: 'EBwsdHvh9m'
                },
                {
                    id: '2',
                    userName: 'adyson2',
                    email: 'etimny2@examiner.com',
                    password: 'zK3EgbCDlG'
                },
                {
                    id: '3',
                    userName: 'pburroughes3',
                    email: 'hkillingworth9@istockphoto.com',
                    password: 'JI3SNZw'
                },
                {
                    id: '4',
                    userName: 'estaden4',
                    email: 'amaffiotti3@youtube.com',
                    password: 'XCPttz94fYpt'
                },
                {
                    id: '5',
                    userName: 'dmacek5',
                    email: 'ydibson4@163.com',
                    password: 'e5z8UrG8ivP4'
                },
                {
                    id: '6',
                    userName: 'iwitson6',
                    email: 'jdancey5@wp.com',
                    password: 'n5Lz7DH'
                },
                {
                    id: '7',
                    userName: 'ciceton7',
                    email: 'atysack6@instagram.com',
                    password: 'rUDqaJDipp9H'
                },
                {
                    id: '8',
                    userName: 'dattersoll8',
                    email: 'nlittlecote7@vinaora.com',
                    password: '6m6GWZ20'
                },
                {
                    id: '9',
                    userName: 'fneligan9',
                    email: 'tgwillym8@deviantart.com',
                    password: 'I2avyj'
                }
            ]
        )
    }
}