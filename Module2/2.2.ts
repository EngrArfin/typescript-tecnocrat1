{
    //interface
    type User1 ={
        name: string;
        age: number;
    };

    interface User2{
        name: string;
        age: number;
    };

    type userWithRole1 = User1 & {role : string};
    
    interface userWithRole2 extends User1 {
        role: string
    }
     const user1: userWithRole2 ={
        name: "Persion",
        age: 100,
        role: "number",
     };

     type rollNumber = number;

    //


    
}