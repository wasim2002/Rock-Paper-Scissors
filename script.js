const userResultImg = document.querySelector(".userRI img")
const compResultImg = document.querySelector(".compRI img")
const text = document.querySelector(".resultT p")
const options = document.querySelectorAll(".option")
const main = document.querySelector("main")

options.forEach((option, index) => {
    option.addEventListener("click", function () {
        userResultImg.src = compResultImg.src = "./images/rock.png"
        text.innerHTML="Playing ...."
        option.classList.add("active")
        main.classList.add("start")
        options.forEach((option2, index2) => {
            index !== index2 && option2.classList.remove("active")
        })
        setTimeout(() => {
            main.classList.remove("start")
            userResultImg.src = option.querySelector("img").src
            let arr = ["./images/rock.png", "./images/paper.png", "./images/scissors.png"]
            let randomIndex = Math.floor(Math.random() * 3)
            compResultImg.src = arr[randomIndex]
            let userImgVal = ["R", "P", "S"][index]
            let compImgVal = ["R", "P", "S"][randomIndex]
            let outCome = {
                RR: "Match Draw !!",
                RP: "Computer Won",
                RS: "You Won",
                PR: "You Won",
                PP: "Match Draw !!",
                PS: "Computer Won",
                SR: "Computer Won",
                SP: "You Won",
                SS: "Match Draw !!"
            }
            text.innerHTML = outCome[userImgVal + compImgVal]
            console.log(outCome[userImgVal + compImgVal]);
        }, 2000);
    })
})
