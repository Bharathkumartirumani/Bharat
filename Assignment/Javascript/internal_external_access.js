//internal access
const student={
    name:"bharath",
    age:24,
    grade:"A",
    subjects:["java","python","javascript"],
    updateGrade: function(newGrade){
        this.grade=newGrade;
        return this.grade;
    }
}
let update=student.updateGrade("B");
console.log(update);
console.log(student.grade);
//external access
function updataName(newName){
    student.name=newName;
    return student.name;
}
console.log(updataName("kumar"));
console.log(student.name);
