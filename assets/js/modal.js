function clip(){
    let copyText = document.querySelector("#textinpp").value;
   
  
    
    navigator.clipboard.writeText(copyText);
    alert("Copied the text");
  }


  