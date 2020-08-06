package test;
import domain.Student;

public class SchoolTest {
    public static void main(String [] args){
        Student [] studentList = new Student[25];
        studentList[0] = new Student("S001", "조혜윤", "컴공");
        Instructor i001 = new Instructor("I001", "이은진", "React");
        Employee e001 = new Employee("E001", "이상희", "교육부");

    }
    System.out.println(studentList[0].toStudent());
}