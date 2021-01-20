function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    //out = input + 5;
    (function() {
        const input = document.querySelector(".input");
        const btnAdd = document.querySelector(".add");
        const btnDisplay = document.querySelector(".display");
        const show = document.querySelector(".show");
        const arr = [];
        let index = 0;
        
        btnAdd.onclick = () => {
        arr.push(`Element ${index} = ${input.value}
        `);
        index++;
        alert(`Element ${input.value} added at index ${index}`);
        input.value = "";
        };
        
        btnDisplay.onclick = () => {
        show.innerHTML += arr.join(" ");
        arr.length = 0;
        };
        })();
    /**/
        output.innerText = out;
    }