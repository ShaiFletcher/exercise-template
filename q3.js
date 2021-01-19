function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    //out = input + 5;

    var first =  (array, n) => {
        if (array == null) 
        return void 0;
      if (n == null) 
        return array[0];
      if (n < 0)
        return [];
      return array.slice(0, n);
    };
  
  console.log(first([7, 9, 0, -2]));
  console.log(first([],3));
  console.log(first([7, 9, 0, -2],3));
  console.log(first([7, 9, 0, -2],6));
  console.log(first([7, 9, 0, -2],-3));
/**/
    output.innerText = out;
}