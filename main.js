const container = document.querySelector(".container");

for (let i=1; i<=100; i++) {

    const element = document.createElement("div");
    element.classList.add("square");

    switch(true) {

        case (i%3==0 && i%5==0):
            
            element.classList.add("fizzBuzz");
            element.innerText = "FizzBuzz";
            break;

        case (i%3==0):
           
            element.classList.add("fizz");
            element.innerText = "Fizz";
            break;

        case (i%5==0):
           
            element.classList.add("buzz");
            element.innerText = "Buzz";
            break;

        default:
            
            element.classList.add("number");
            element.innerText = i;    
    }

    container.append(element);
}