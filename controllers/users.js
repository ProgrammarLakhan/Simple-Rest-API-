import { v4 as uuidv4 } from 'uuid';
var users = [{
        firstname:"Lakhan",
        lastname:"Nagar",
        age:21,
        id:"abcd-1234"
    },
    {
        firstname:"Vishnu",
        lastname:"Nagar",
        age:20,
        id: "wxyz-1234"
    }
];

export const getUsers = (req,res)=>{
    res.send(users);
}

export const createUser = (req,res)=>{
    const user = req.body;
    const userWithid = {...user,id:uuidv4()};
    users.push(userWithid);
    res.send(`User with the name ${req.body.firstname} added successfully!!!`);
}

export const getUser = (req,res)=>{
    const { id } = req.params;
    const foundUser = users.find((user)=> user.id == id); 
    res.send(foundUser);
}

export const deleteUser = (req,res)=>{
    const { id } = res.params;
    users = users.filter((user)=>user.id != id);
    res.send(`User with id ${id} deleted successfully!`);
}

export const updateUser = (req,res)=>{
    const { id } = res.params;
    const { firstname, lastname ,age } = req.body;
    const user = users.find((user)=> user.id == id);
    if (firstname) user.firstname = firstname;
    if(lastname) user.lastname = lastname;
    if(age) user.age = age;
    res.send(`User with id ${id} has been updated successfully!`);
}