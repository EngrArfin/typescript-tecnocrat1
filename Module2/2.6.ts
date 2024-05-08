{
    //constraints
    const addCOurseToStudent = <T>(student: T) =>{
        const course = "Next Level Developer";
        return {
            ...student,
            course,
        };
    };
    const student1 = addCOurseToStudent({
        id: 222,
        name: "S Arfin",
        email: "S@gmail.com",
        devType: "Null"
    });
    const student2 = addCOurseToStudent({
        name: "S Shuvo",
        email: "dd@gmail.com",
        hasWatch: "Apple Watch",
    });




    //

}