// function checkLogin(){
// if(('sessionStorage') in window && window['sessionStorage'] !== null){
// 	var lastname = sessionStorage.getItem("login");
// 	if(lastname !== null){
// 		// $('#hello').html("Hello <b>world!</b>");
// 		// $('#hello').text(name);
// 		alert(lastname);
// 	}
	
// }
// else{
// 	alert('Trình duyệt không hỗ trợ');
// }
// }

var lastname = sessionStorage.getItem('login');
	if(lastname !== null){
		$('.indexLogin').css('display','block');
		$('.indexLogin1').css('display','block');
		$('#index').css('display','none');
		$('#index1').css('display','none');
		$('#hello').html('Xin chào ' + lastname +' '+'!!!')
	}
	else{
		$('.indexLogin').css('display','none');
		$('.indexLogin1').css('display','none');
	
	}


function checkLogin(){
	if(lastname == null){
	window.location.href = 'file:///F:/project/index.html';
	alert("Xin vui lòng đăng nhập hoặc đăng kí trước !!!");
	}
}
$('#logout').click(function(){
	sessionStorage.removeItem('login');
	window.location.href = 'file:///F:/project/index.html';
	// var url = 'index.html';
})