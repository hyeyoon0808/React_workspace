package domain;

class Instructor extends Person{
    private String subject;

    public Employee(){}
    public Employee(String id, String name, String subject){
        super(id, name);
        this.subject=subject;
    }

    public void setSubject(string subject){
        this.subject = subject;
    }
    public String getSubject(){
        return this.subject;
    }
    public String toEmployee(){
        return super.toString()+"\tsubject: "subject;
    }
    