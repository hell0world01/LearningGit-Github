let boxes = document.querySelectorAll(".box");

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    
]

let turnO = true;
boxes.forEach( item => {
    item.addEventListener("click", () => {
        item.innerHTML = turnO ? "O" : "X";
        turnO = !turnO;
        item.disabled = true;
        winnerFunction();
    })
})

let disableBtn = () => {
    boxes.forEach( box => { box.disabled = true;})
}

let winnerFunction = () => {
    for (let pattern of winPatterns) {
        let val1 = boxes[pattern[0]].innerHTML;
        let val2 = boxes[pattern[1]].innerHTML;
        let val3 = boxes[pattern[2]].innerHTML;
        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val2 === val3) {
                setTimeout(() => {
                    alert(`Winner is ${val1}`);
                    disableBtn();
                }, 0);
                return;
            }
        }
    }
};