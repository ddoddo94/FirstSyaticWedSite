
function isCorrectName(inputName) {           //이름 정규식 id 바꿈
  let regExp = /^[a-zA-Z가-힣]{2,15}$/;
  return regExp.test(inputName);
}

function onkeyup(){
    if(window.event.keyCode == 13){
        function isCorrectId(inputId) {              //아이디정규식
          let regExp = /^[a-z0-9]{6,12}$/;
          return regExp.test(inputId);
              switch(result){
                case true :
                  console.log("아이디 합격")

                case false :
                  alert("아이디가 올바르지 않습니다.")
              }
        }
      }    
}



function isCorrectPassword(inputPw) {                              //패스워드 정규식
  let regExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/;
  return regExp.tes(tinputPw);
}



function isCorrectMail(inputMail) {                              //이메일 정규식  id바꿈
  let regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  return regExp.test(inputMail);
 
 switch(inputMail){
    case true :

    case false :
        alert("이메일 형식이 올바르지 않습니다.")
}





function checkPassword(){                     //패스워드 일치 확인
   // event.preventDefault();
    let password = document.getElementById('make_password').value;
    let passwordagain = document.getElementById('check_password').value;

    function isCorrectPassword(password) {                              //패스워드 정규식
      let regExp = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/;
      return regExp.tes(password);
    }
    
    if(password == passwordagain){
      console.log("일치");
      go_localStorage('make_password');
      
    }else{
      alert("비밀번호가 일치하지 않습니다.");
    }

}
       
function check_id(){                               //아이디 중복확인
    let input_id = document.getElementById('make_id_input').value;
    let data1Arr = localStorage.getItem(input_id);
    for(let i=0; i<data1Arr.length; i++){
        if(input_id == data1Arr[i]){
          alert("이미 존재하는 아이디 입니다.");
        }else{ 
          alert("가입가능한 아이디 입니다.");
          go_localStorage('make_id_input') ;
        
        }
    }

}



function go_localStorage(pas){              //로컬 스토리지 전송
  let ele = document.getElementById(pas);
  let data = ele.value;
  localStorage.setItem(pas,data);
  location.href='login.html';
}



function enterkey() {

	  if (window.event.keyCode == 13) {

        function isCorrectMail(inputMail) {            
                                                                                       //이메일 정규식  id바꿈
            let regExp = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
            return regExp.test(inputMail);
     
            switch(inputMail){
                case true :
    
                case false :
                    alert("이메일 형식이 올바르지 않습니다.");


            }
          }    
     }
}    	                                     