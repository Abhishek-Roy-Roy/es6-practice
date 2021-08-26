class Student{
    constructor( name, Id ,height){
        this.Name= name;
        this.id = Id;
        this.height= height;
    }

}
const student1= new Student('Abhishek',10,5.6)
const student2= new Student('Akhil',20,5.3)
const student3 =new Student('Eshan',30,5)
console.log(student1, student2, student3)