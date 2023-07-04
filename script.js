
function validateForm() {
    let x = document.getElementsByName("uname");
    console.log("okkpo");
    console.log(x)
    if (x[0] == "") {
      alert("Name must be filled out");
    }
  }