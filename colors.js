/*나이트-데이모드 전환시 바디 텍스트 & 바디 백그리운드 컬러 전환 함수*/
var Body = {
    setColor:function (color){
    // document.querySelector('body').style.color = color;},
    $('body').css('color',color);
    },
    setBackgroundColor:function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor',color);
    }
 }
  
 /* 나이트-데이모드 전환시 링크 컬러 전환 함수. 함수 실행 시, 변인에 원하는 색상 입력*/
 var Links = {
   setColor:function(color){
        //      var alist = document.querySelectorAll('a');
        //      var i = 0;
        //      while(i<alist.length){
        //        alist[i].style.color = color;
        //        i = i+1;}
    $('a').css('color',color);
   }
 }
 
 /* 나이트 모드 전환시 body 텍스트 및 링크 컬러 변경 함수*/
 function nightDayHandler(self){
     var target = document.querySelector('body');
     if(self.value ==='night'){
       Body.setBackgroundColor('black'); 
       Body.setColor('white');
       self.value ='day'; 
       Links.setColor('powderblue');

   }
     else{
     Body.setBackgroundColor('white');
     Body.setColor('black');
     self.value ='night';
     Links.setColor('black');
     }
 }

