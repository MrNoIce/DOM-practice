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