var output = document.querySelector("#output");
var button = document.querySelector("#order");
var pizzaName = document.querySelector("#pizzaname");
var doughName = document.querySelector("#dough");
var sauceName = document.querySelector("#sauce");
var cheeseName = document.querySelector("#cheese");
var checkboxes = document.querySelectorAll('input[type="checkbox"]');

class Pizza{

    name;
    doughType;
    sauce;
    cheese;
    topping;

    constructor (name, doughType, sauce, cheese, topping)
    {
        this.name = name;
        this.doughType = doughType;
        this.sauce = sauce;
        this.cheese = cheese;
        this.topping = topping;
    }

    description(){
        output.textContent = `Your pizzas name is ${this.name}, your dough type is ${this.doughType}, your sauce is ${this.sauce}, your cheese is ${this.cheese} and your toppings are ${this.topping}`;
    }
}

button.addEventListener("click", function(){
    if (pizzaName.value === "")
    {
        alert("Please enter a pizza name");

    }

    else 
    {
       let toppings = [];

        for (let i = 0; i < checkboxes.length; i++)
        {
            if (checkboxes[i].checked)
            {
                toppings.push(checkboxes[i].value);
            }
        }

       let usersPizza = new Pizza(pizzaName.value, doughName.value, sauceName.value, cheeseName.value, toppings)
       usersPizza.description();
       var studentInfo = document.createElement("p");
       studentInfo.textContent = "Made by Nathan Marino 200527317";
       output.appendChild(studentInfo);

    }

});

