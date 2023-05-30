ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
Your answer:
    

Researched answer:

Which RESTful routes must always be passed params? Why?
Your answer:

Researched answer:

Name three rails generator commands. What is created by each?
Your answer:
    1. rails g migration: This command creates a migration within the rails app. In running this, the developer is able to add/modify aspects of the database they are working on. It also provides a random key that can be thought of as a receipt. This enables the developer to track their changes and ensure coding integrity through out the process.
    2. rails g model: 
    3. rails g controller: This command creates a controller within the rails app. The controller's function is to coordinate the interaction betweent the user, model, and views files. This is accomplished through the use of routes, which is a separate file.  

Researched answer:

Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
action: "GET" location: /students
    Method Name: index
    Action: 


action: "POST" location: /students
    Method Name: create
    Action:

action: "GET" location: /students/new
    Method Name: new
    Action:

action: "GET" location: /students/2
    Method Name: show
    Action:

action: "GET" location: /students/2/edit
    Method Name: edit
    Action:

action: "PATCH" location: /students/2   
    Method Name: update
    Action:

action: "DELETE" location: /students/2
    Method Name: destroy
    Action:

As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Here is a resource to help you create your user stories.