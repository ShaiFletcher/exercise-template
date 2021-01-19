function run() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    let out = "";
/**/
    // write your code here
    //out = input + 5;

    var is_array = input => {
        if (toString.call(input) === "[object Array]")
          return true;
        return false;   
          };
      console.log(is_array('w3resource'));
      console.log(is_array([1, 2, 4, 0]));
/**/
    output.innerText = out;
}