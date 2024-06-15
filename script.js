let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let historyList = document.getElementById('historyList');
let historyDiv = document.getElementById('history');

let string = "";
let history = [];
let count = 1;

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            try {
                let result = eval(string);
                input.value = result;
                history.push(`${count}: ${string} = ${result}`);
                count++;
                updateHistory();
                string = ""; // Clear input after calculation
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (e.target.innerHTML == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else if (e.target.innerHTML == 'History') {
            toggleHistory();
        } else {
            string += e.target.innerHTML;
            input.value = string;
        }
    });
});

function updateHistory() {
    historyList.innerHTML = "";
    history.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        historyList.appendChild(li);
    });
}

function toggleHistory() {
    if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
        historyDiv.style.display = "block";
    } else {
        historyDiv.style.display = "none";
    }
}
