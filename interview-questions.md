ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?
Your answer: In order to fix this, you would need to edit the Student model. In Student, you would need to add the association with the Cohort model. this is accomplished by adding belongs_to : Cohort.
    
Researched answer: To correct the missing foreign key, you would need to generate a migration. Within this migrations change method, you would add the foreign key constraint. After this, you need to run the db: migrate command. This will add a foreign key column to the Student model. Once this is completed, you can go in to the Student model and add the association to the Cohort model by adding belongs_to :cohort. This links the two models together.

Which RESTful routes must always be passed params? Why?
Your answer: The following RESTful routes must be passed a param: edit, delete, show, and patch/put. Edit and delete require params because it is necessary to know what element it is that you plan to modify or delete. The same is true for patch/put as well. They are necessary for show because the program needs to know which element it is that you wish to view.

Researched answer: The following RESTful routes must be passed a para,: Show, Edit, Update, and Destroy. The params are required because without them, the program would not have enough information to know how to properly execute. Show requires an ID param in order to determine which element it needs to display. Edit requires an ID param in order to identify which element you would be editing. Update requires a param for the same reason that Edit does. Lastly, Destroy requires a param so the program knows which element it will be deleting.

Name three rails generator commands. What is created by each?
Your answer:
    1. rails g migration: This command creates a migration within the rails app. In running this, the developer is able to add/modify aspects of the database they are working on. It also provides a random key that can be thought of as a receipt. This enables the developer to track their changes and ensure coding integrity through out the process.
    2. rails g model: This command creates a model for your database. This is necessary for the proper structuring of your database to ensure effective storage of information.
    3. rails g controller: This command creates a controller within the rails app. The controller's function is to coordinate the interaction betweent the user, model, and views files. This is accomplished through the use of routes, which is a separate file.  

Researched answer:
    1. rails g migration: This command creates a new migration file within your rails application. This allows you to make changes to the database schema and also allows you to track those changes that have been made. This is accomplished with a unique number that is attached to the file name. This process is not complete until you run the 'rails db:migrate' command as well.
    2. rails g model: This command creates a new model file within the rails applicaiton. It also sets up a coding outline that you can edit to better define the behavoir of the model. It will also create a migration file as well as a test file
    3. rails g controller: This command creates a new controller file within the rails application. This file is use to handle the logic associated with incoming requests, interacting with the models, and rendering the correct responses. The command will also create a 'view' and test files. It essentially builds a rough outline of the controller, view, and testing files that you can easily modify to suit the needs of the applicaiton you are creating.

Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?
action: "GET" location: /students
    Method Name: index
    Action: This would retrieve and display all of the data stored in the student database


action: "POST" location: /students
    Method Name: create
    Action: This would allow the user to create a new 'student' entry and store it in the database

action: "GET" location: /students/new
    Method Name: new
    Action: This would generate a form in which the user could input data for creating a new student entry in the database

action: "GET" location: /students/2
    Method Name: show
    Action: This would retrieve a specific student data through the use of the provided param (2) and display it to the user

action: "GET" location: /students/2/edit
    Method Name: edit
    Action: This would access a particular student through the use of the provided param (2) and generate a form in which the user can input data to update that particular students specific data fields

action: "PATCH" location: /students/2   
    Method Name: update
    Action: This would access a particular student through the use of the provided param (2) and allow you to update the entire data entry base on provided information

action: "DELETE" location: /students/2
    Method Name: destroy
    Action: This would locate the specific student data entry as provided by the param (2) and then delete that entry from the database.

As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Here is a resource to help you create your user stories.

    1. As a user, I can access a custom landing page
    2. As a user, I can add a new task to the to-do list
    3. As a user, I can see the current list of task on my to do list
    4. As a user, I can edit an existing task to update requirements
    5. As a user, I can edit an existing task to mark it as complete
    6. As a user, I can delete task entries
    7. As a user, I can sort my tasks into custom categories
    8. As a user, I can add a priority to my taskings
    9. As a user, I can add a due date to my taskings
    10. As a user, I can store completed tasks in a separate list