//write the code necessary to do the following

//Question 1.
//Select the section with an id of container without using querySelector
//Answer
const conta = document.getElementById("container")
console.log(conta);


//Question 2.
//Select the section with an id of container using querySelector
//Answer
const con = document.querySelector("#container")
console.log(con)


//Question 3.
//Select all of the list items with a class of "second"
//Answer
const allSecond = document.querySelectorAll(".second")
console.log(allSecond)


//Question 4.
//Select a list items with a class of third, but only the list item inside of the ol tag.
//Answer
const olItems = document.querySelector("ol")
//console.log(olItems[third])


//Question 5.
//Given the section with an id of container the text "Hello!"
//let ss = document.getElementById("container").innerText =" Hello!"
//console.log(ss)


//Question 6.
//Add the class main to the div with a class of footer
//Answer
const foot = document.querySelector(".footer")
foot.classList.add("main")
console.log(foot)


//Question 7.
//Remove the class main on the div with a class of footer
//Answer
foot.classList.remove("main")


//Question 8.
//Create a new li element
//Answer
let list = document.createElement("li")
console.log(list)

//Question 9.
//Given the li the text "four"
//Answer
let nc = document.createElement("li")
nc.innerHTML="four"
console.log(nc)
//list.innerText="four"



//Question 10.
//Append the li to the ul element
//Answer
let dd = document.getElementById(container)

list.setAttribute("class","text")
nc.append(dd)


//let fr = document.getElementsByTagName("class")
// fr.setAttribute("class","text")
//fr.appendChild(list)


let fr = document.querySelector(".class")
//fr.appendChild(list)
//fr.setAttr
//console.log(fr)
//fr.setAttribute("text")
//list.appendChild(fr)


//Question 11.
//Loop over all of the lis inside the ol tag and give them a background color of "green"
const ol = document.getElementsByTagName("ol")
//console.log(ol)
for(let i = 0; i<ol.length; i++){
    console.log(ol[i])
    ol[i].style.backgroundColor="green"
}


//Question 12.
//Remove the div with a class of footer
foot.classList.remove("footer")
