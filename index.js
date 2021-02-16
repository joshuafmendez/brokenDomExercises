
const disEmvowel = () => {
    const el = document.querySelector("#name_to_disemvowel");
    const p = document.querySelector(".disemvowel_string");
    const str = el.value;
    let output = "";
    const vowels = "aeiou"; 
    for(let char of str) {
        if(!vowels.includes(char.toLowerCase())) {
            output += char;
        }
    }
    p.textContent = output;
}

const isPalindrome = () => {
    const str = document.querySelector("#is_palindrome_input").value;
    const p = document.querySelector("#is_palindrome_p");
    let result = ""; 
    for(let i = 0; i < str.length; i++) {
        if(str[i] === str[str.length - i - 1]) {
            result = "true";
        } else {
            result = 'false';
        }
    }
    p.textContent = result;
}

const sumOfNum = arr => {
    let sum = 0; 
    for(let i = 0; i < arr.length; i++) {
        let num = arr[i];
        sum += num;
    }
    return sum; 
}
const average = arr => {
    let sum = sumOfNum(arr);
    return sum / arr.length; 
}

const onlyOdds = arr => {
    return arr.filter(num => num % 2 !== 0);
}
const favoriteNumbers = () => {
    let list = document.querySelectorAll("#favorite_numbers li");
    let arr = [];
    list.forEach((listItem) => {
        arr.push(Number(listItem.textContent));
    })
    const sumOfNums = sumOfNum(arr);
    const averageOfNums = average(arr);
    const onlyOddsOfNums = onlyOdds(arr);
    debugger

    const sumOfFav = document.querySelector("#sum_of_favorite_nums");
    sumOfFav.textContent += sumOfNums; 

    const aveOfFav = document.querySelector("#average_of_favorite_nums");
    aveOfFav.textContent += averageOfNums; 

    let oddList = document.querySelector("#list_of_odd_favorite_nums");
    onlyOddsOfNums.forEach((odd) => {
        const li = document.createElement("li");
        li.textContent = odd;
        oddList.appendChild(li);
    });
}

favoriteNumbers();

const incrementCount = () => {
    const countr = Number(document.querySelector("#click_count"));
    counter.textContent = counter.textContent + 1;
}

const reset = () => {
    const counter = document.querySelector("#click_count");
    counter.displayContent = 0;
}

const addItem = () => {
    const shoppingList = document.querySelector("ul");
    const input = document.querySelector(".add_item")
    const item = input;
    const listItem = document.createElement("li");
    listItem.textContent = item;
    shoppingList.appendChild(listItem)
    input.value = "Empty";
}

const killButton = () => {
    const button = document.querySelector("#kill_button");
    button.removeChild(button)

    const header = document.querySelector("#kill_button_header");
    header.innerText = "Yay you were victorious!"
    header.style.color = "green";
}