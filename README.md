# Bransys Interview Task

## About
This simple project is a task for the interview with Bransys. It is developed with Vue.js and the design is Bootstrap 4.

### The Root App
In the root app of the project there is the menu in which you can choose the Submit Form or The Vehicle here. In this class also the vehicle.json file is being loaded and it is used in the children. 

### The Form
The form elements are classical html input elements except for the autocomplete model element in which I use a third party widget from EJS called autocomplete. 

### Create
On the homepage there is a form in which there is a validation with Vuelidate and also custom validations for the dates and the licence plate. If you do something wrong there is a message under every form element saying what you need to do to correct the error. When there are no errors you get an alert on the browser saying that the "car name" is saved succesfully. 

### Delete
On the vehicle list menu the vehicles in the json file are being listed and next to them are the update and delete buttons. When you press on the delete button you get a message in which you need to confirm the deletion of the element. And when you confirm the element is being removed of the showing list. 

### Update
For the update method I figured I need to use the the same form as the create form because we are dealing with the same data and also because of redundancy reasons. So if the route is /:id the vehicle with the position of :id is being called and its values are written inside of the form elements so that it would be easier to change them. So basically I am using the same form it just behaves different because of the id param in the url. Both the / and /:id are loading the same component.
 
