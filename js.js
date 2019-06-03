const articleHead = document.querySelector(".article__header") 
    
articleHead.textContent = "Welcome to Jakes Blog"
console.log(articleHead)
const articleHeads = document.querySelectorAll(".article__header")

articleHeads[0].classList.add("article__header_important")

articleHeads[1].classList.add("article__header_important")
console.log(articleHeads)
const dashed = document.querySelector(".dashed")

dashed.classList.remove("dashed")
console.log(dashed)
const article = document.querySelector(".article__footer")

article.classList.add("goldenrod")

console.log(dashed + articleHead)

article.classList.add("blue")

// Exercise #1 Take the following data and represent it in
// 1. A string
// 2. An object
// 3. An array
// "lunch"
// "peanut butter and jelly"
// "whole wheat"
// "grape juice"
// "apple"

const arrays = ["lunch", "peanut butter and jelly", "whole wheat", "grape juice",
"apple"]
console.log(arrays)

const stringy = {
    whatsfor: "lunch",
    times: "peanut butter and jelly",
    tumes: "whole wheat",
    drinks: "grape juice"
}
console.log(stringy)

const stringies = "lunch, peanut butter and jelly, whole wheat grape juice"
console.log(stringies)

// Exercise #2 Use string template literal syntax to create the following sentence from the variables below
// "Hi. My name is Biff, and I'm 30 years old. They say that makes me a millenial. In 25 years I'll be 55! I guess that means I'll be a milleni-old then. Ha ha!"
const age = 30
const timeSpan = 25
const futureAge = age + timeSpan
const name = "Biff"
const generationStereotype = "millenial"
const dadJoke = "milleni-old"

console.log(`Hi, my nsme is ${name}, and i am ${age} years old. They say that makes me a 
${generationStereotype}. In ${timeSpan} years I'll be ${futureAge}. I guess that means ill be ${dadJoke} till then. HAHA!`)