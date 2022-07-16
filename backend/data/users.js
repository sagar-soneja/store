import bcrypt from 'bcryptjs'

const users = [
    {
        name :'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,

    }, 
    {
        name: 'Sagar Soneja',
        email: 'sagar@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Sakshi Soneja',
        email: 'sakshi@example.com',
        password: bcrypt.hashSync('123456', 10),
    }
]
export default users