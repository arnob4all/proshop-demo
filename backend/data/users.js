import bcrypt from 'bcryptjs'

const users=[{
    name:'Admin User',
    email:'admin@email.com',
    password:bcrypt.hashSync("123456",10),
    isAdmin:true,
},
{
    name:'John Doe',
    email:'jhonn@email.com',
    password:bcrypt.hashSync("123456",10),
    isAdmin:false,
},
{
    name:'Sue Lee',
    email:'sue@email.com',
    password:bcrypt.hashSync("123456",10),
    isAdmin:false,
},
{
    name:'Arnob Hasan',
    email:'arnob@email.com',
    password:bcrypt.hashSync("123456",10),
    isAdmin:false,
},
]
export default users