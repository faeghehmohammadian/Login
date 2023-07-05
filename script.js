
function VF() {
  let x = document.getElementsByName("uname")[0].value;
  let y = document.getElementsByName("psw")[0].value;

    if (x && y) {
      alert("Hello"+x);
    }
    else if (x){
      alert("Please Enter Password");
    }else{
      alert("Please Enter Name");
    }

  }
