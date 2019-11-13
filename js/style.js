$('.add-to-cart').on('click', function () {
    $('#count-shop').show();
        var cart = $('.shopping-cart');
		var imgtodrag = $(this).closest('.items').find("img").first();
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                top: imgtodrag.offset().top,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.5',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'z-index': '100'
            })
                .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            // setTimeout(function () {
            //     cart.effect("shake", {
            //         times: 2
            //     }, 200);
            // }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    });


// <---Đếm giỏ hàng --->
$('.add-to-cart').on('click', function () {
    $('#count-shop').show();
    })

// <!--hiển thị thêm vào giỏ hàng-->
// 
// 
$(".product").hover(function(){
  $(this).css("background-color", "black");
  $(this).children('.button').children('.add-to-cart').show(200);
  }, function(){
  $(this).css("background", "none");
  $(this).children('.button').children('.add-to-cart').hide(200);
});

// <!--- giỏ hàng, đếm số hàng trong giỏ-->
// 
// \
$(function() {
  $('.add-to-cart').click(function() {
    $('#count-shop').html(function(i,val) {
      return val*1 + 1;
    });
  });
});


// <!-- list-product-->
// 
// 
// $('#imgtopro').click(function(){
//     var imgpro = $('.img').children("img").clone();
//     $(".imgage-product").append(imgpro);
// })


// mua hang
// 
$('.mua').click(function(){
    window.location.href = 'file:///F:/project/thanh-toan.html';
})

$('.caption').click(function(){
    if(('sessionStorage') in window && window['sessionStorage'] !== null){
        var title = $(this).children('#titleproduct').text();
        sessionStorage.setItem('titleproduct',title);
        var title = sessionStorage.getItem('titleproduct') ;

        var price = $(this).children('#price').text();
        sessionStorage.setItem('price',price);
        var price = sessionStorage.getItem('price') ;
        window.location.href = 'file:///F:/project/profile-product.html';
    }
    var price = sessionStorage.getItem('price') ;
})
$('.item').click(function(){
    if(('sessionStorage') in window && window['sessionStorage'] !== null){
       var title =  $(this).closest('.items').find("#titleproduct").text();
        sessionStorage.setItem('titleproduct',title);
        var title = sessionStorage.getItem('titleproduct') 

        var price = $(this).closest('.items').find('#price').text();
        sessionStorage.setItem('price',price);
        var price = sessionStorage.getItem('price') ;
    }
    window.location.href = 'file:///F:/project/profile-product.html';
})
$('#home').click(function(){
    sessionStorage.removeItem('titleproduct');
})
$('.item').click(function(){
    if(('sessionStorage') in window && window['sessionStorage'] !== null){
        var url = $(this).closest('.items').find("img").attr('src');
        sessionStorage.setItem('url',url);
}})
$('.caption').click(function(){
    if(('sessionStorage') in window && window['sessionStorage'] !== null){
        var url = $(this).closest('.items').find("img").attr('src');
        sessionStorage.setItem('url',url);
}})


//
//
//               Validate
//
//
//
//


$(function() {
    $('#dangnhap').validate({
        rules: {
            userLogin: {
                required: true,
                minlength:6
            },
            matkhau: {
                required: true,
                minlength:6
            }
        },
        messages: {
            userLogin: {
                required: "<span style='color: red'>Vui lòng nhập tên đăng nhập</span>",
                minlength: "<span style='color: red'>Tên đăng nhập quá ngắn, phải trên 6 kí tự !!!</span>",
            },
            matkhau: {
                required: "<span style='color: red'>Vui lòng nhập mật khẩu<span>",
                minlength: "<span style='color: red'>Mật khẩu quá ngắn, phải trên 6 kí tự !!!</span>",
            }
        }
    })
})
$.validator.addMethod('regexPhone',function(value,elm,reg){
    return reg.test(value);},'Tin nhắn lỗi mặc định'
);

$(function() {
    $("#dangki").validate({
        rules:{
            newUser:{
                required: true,
                minlength: 6
            },
            newPhone:{
                required: true,
                regexPhone:/(09|08[2|3|6|8|9]|05[8])+([0-9]{8})\b/,
            },
            newEmail: {
                required: true,
                email: true,
            },
            newPass: {
                required: true,
                minlength:6
            },
            confirmNewPassword:{
                required: true,
                minlength:6,
                equalTo: "#newpassword",
            },
             dieukhoan: "required"


        },
        messages:{

            newUser: {
                required: "<span style='color: red'>Vui lòng nhập tên đăng nhập</span>",
                minlength: "<span style='color: red'>Tên đăng nhập quá ngắn, phải trên 6 kí tự !!!</span>",
            },
            newEmail:{
               required: "<span style='color: red'>Vui lòng nhập địa chỉ Email</span>",
                email: "<span style='color: red'>Email không đúng định dạng. VD:'abcd@gmail.com'</span>"
            },
            newPhone: {
                required: "<span style='color: red'>Vui lòng nhập số điện thoại</span>",
                regexPhone:"<span style='color: red'>Số điện thoại không tìm thấy ở Việt Nam</span>"
            },
            newPass:{
                required: "<span style='color: red'>Vui lòng nhập mật khẩu<span>",
                minlength: "<span style='color: red'>Mật khẩu quá ngắn, phải trên 6 kí tự !!!</span>",
            },
            confirmNewPassword:{
                required:"<span style='color: red'>Vui lòng nhập mật khẩu<span>",
                minlength:"<span style='color: red'>Mật khẩu quá ngắn, phải trên 6 kí tự !!!</span>",
                equalTo:"<span style='color: red'>Mật khẩu không khớp nhau</span>"
            },
            dieukhoan: "<span style='color: red'>Vui lòng đồng ý các điều khoản</span>"

        }
    })
})



$('#thanhtoan-vali').on('submit', function(e) {
  
  e.preventDefault(); //stop submit
  
  if ($('#myCheck').is(':checked')) {
  //Check if checkbox is checked then show modal
    $('#myModal').modal('show');
  }
});




    $("#thanhtoan-vali").validate({
        rules:{
            ho:{
                required:true,
                minlength:2
            },
            ten:{
                required:true,
                minlength:2
            },
            xa:{
                required:true,
                minlength:2
            },
            quan:{
                required:true,
                minlength:2
            },
            tinh:{
                required:true,
                minlength:2
            },
            phonett:{
                required: true,
                regexPhone:/(09|08[2|3|6|8|9]|05[8])+([0-9]{8})\b/,
            },
            emailtt:{
                required: true,
                email: true,
            },
            xacnhandonhang:{
                required:true
            }
        },
        messages:{
            ho:{
                required: "<span style='color: red'>Vui lòng nhập họ và tên đệm</span>",
                minlength:"<span style='color: red'>Quá ngắn</span>"
            },
            ten:{
                required: "<span style='color: red'>Vui lòng nhập tên</span>",
                minlength:"<span style='color: red'>Quá ngắn</span>"
            },
            xa:{
                required: "<span style='color: red'>Vui lòng nhập xã hoặc phường</span>",
                minlength:"<span style='color: red'>Quá ngắn</span>"
            },
            quan:{
                required: "<span style='color: red'>Vui lòng nhập quận hoặc huyện</span>",
                minlength:"<span style='color: red'>Quá ngắn</span>"
            },
            tinh:{
                required: "<span style='color: red'>Vui lòng nhập tỉnh hoặc thành phố</span>",
                minlength:"<span style='color: red'>Quá ngắn</span>"
            },
            phonett:{
                required: "<span style='color: red'>Vui lòng nhập số điện thoại</span>",
                regexPhone:"<span style='color: red'>Số điện thoại không tìm thấy ở Việt Nam</span>"
            },
            emailtt:{
                required: "<span style='color: red'>Vui lòng nhập địa chỉ Email</span>",
                email: "<span style='color: red'>Email không đúng định dạng. VD:'abcd@gmail.com'</span>"
                },
            xacnhandonhang:{
                required:"<span style='color: red'>Vui lòng nhập xác nhận đơn hàng</span>"
            }

        }
        })

    // ----------------Thanhtoan----------------




$('#thanhtoanButton').click(function(){
    var ho = $('#ho-tt').val();
    var ten = $('#ten-tt').val(); 
    var xa = $('#xa-tt').val();
    var quan = $('#quan-tt').val();
    var tinh = $('#tinh-tt').val();
    var phonett = $('#phone-tt').val();
    var emailtt = $('#email-tt').val();
$('#alerttt').html(
    'Cảm ơn <span style="color: red,font-weight:900">'
    +ho+' '+ten+'</span> đã mua hàng'+'<br>' 
    + 'Số điện thoại: ' + phonett +'<br>'
    + 'Địa chỉ : ' + xa +' '+quan+' '+tinh +'<br>'
    + ' Chúng tôi sẽ gửi mail xác nhận tới: '+ emailtt
    )
});



$(function() {
  $('.cong').click(function() {
   var valnew = $('#quantity').val();
    $('#quantity').val(function(i,valnew) {
      return valnew*1 + 1;
    });
  });
});

$(function() {
  $('.tru').click(function() {
   var valnew1 = $('#quantity').val();
   if (valnew1>1){
    $('#quantity').val(function(i,valnew) {
      return valnew1*1 - 1;
   $('#click').click(function() {
    $('#count-shop1').html(function(i,val) {
      return valnew1    ;
    });
})

   }
   )}
    });
  });

$('#click').on('click', function () {
    $('#count-shop1').show();
    })
   $('#click').click(function() {
    $('#count-shop1').html(function(i,val) {
      return val*1 +1    ;
    });
})












// --------------------Shopping cart-----------------
// --------------------Shopping cart-----------------
// --------------------Shopping cart-----------------
// --------------------Shopping cart-----------------

/* Set rates + misc */
$(document).ready(function() {
 
/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15000.00; 
var fadeTime = 200;
 
 
/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});
 
$('.product-removal button').click( function() {
  removeItem(this);
});
 
 
/* Recalculate cart */
function recalculateCart()
{
  var subtotal = 0;
   
  /* Sum up row totals */
  $('.product2').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
   
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
   
  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}
 
 
/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
   
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(0));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}
 
 
/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
 
});