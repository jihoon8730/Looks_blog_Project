// blog입력창 열기 / 닫기
$('#main-blog').on('click', function(){
  $('#blogForm').fadeIn();
});
$('#blogformClose').on('click', function(){
  $('#blogForm').fadeOut();
});


// blog입력 창 alert 띄우는 기능 구현 !
// card-form안 글발행을 누르면 text를 바꾸는것 까지 구현 !
// $('#blogPrint').on('click', function(e){
//   let title = $('#title').val();
//   let name = $('#name').val();
//   let contents = $('#contents').val();
  
//   if (title === "") {
//     alert('제목을 입력해 주세요!');
//   } else if (name === "") {
//     alert('이름을 입력해 주세요!')
//   } else if (contents === "") {
//     alert('내용을 입력해 주세요!')
//   } else {
//     alert('작성이 완료되었습니다.')
//     e.preventDefault();
//     // bolg 글발행 클릭 후 input 값 초기화 null
//     $('#title').val(null);
//     $('#name').val(null);
//     $('#contents').val(null);
//   }
// });

// 블로그 card 폼 누르면 show-modal 붙여서 띄워 줌
// class를 붙였다 뗐다 하는 방식으로 구현 해봄!
$('#main-tuto').on('click',function() {
  $('.black-modal').addClass('show-modal');
});

$('.modal-close').on('click', function(){
  $('.black-modal').removeClass('show-modal');
});

// DarkMode(다크모드)
let darkmodeCount = 0;

$('.badge').on('click', function(){
  darkmodeCount += 1;
  if (darkmodeCount % 2 === 0) {
    $('.main-title').css('color','black');
    $('.wrap').css('background','none');
    $('.badge').text('DarkMode 🔄');
    $('#blogForm').css('color','black');
  } else {
    $('.main-title').css('color','white');
    $('.wrap').css('background','black');
    $('.badge').text('LightMode 🔄');
    $('#blogForm').css('color','#eeeeee');
  }
});

// // blog글 수정 창 열고 닫기
// $('#blogUpdate').on('click', function(){
//   $('.bkBlog-modal').show();
//   console.log(show);
// });