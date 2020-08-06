package domain;
private String id;
private String name;
private String major;


public class Person{

    //Constructor
    //default 생성자
    public Person(){

    }
    //생성자 overloading
    //this: 현재객체
    public Person(String id, String name, String major) {
        this.id=id;
        this.name=name;
        this.major=major;
    }
    //Encapsulation
    public void setId(String id){
        this.id = id;
    }
    public void getId(){
        return this.id;
    }
    public void setName(String name){
        this.name = name;
    }
    public void getName(){
        return this.name;
    }public void setMajor(String major){
        this.major = major;
    }
    public void getMajor(){
        return this.major;
    }

    public String toString() {
        return "id: "+id+"\tname: "+name;
    }
}

