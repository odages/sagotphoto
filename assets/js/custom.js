jQuery(document).ready(function($){

  $(function(){$("#msjBtn").click(function(){
      var data={
        name:$(".name-field").val(),
        email:$(".mail-field").val(),
        phone:$(".phone-field").val(),
        message:$(".message-field").val()
      };
      console.log(data);
        $('.errMsgContact').removeClass('animated bounceIn');
        $('.errMsgContact').addClass('hide');
        if(data.name==""){
          $('.errMsgContact').removeClass('hide');
          $('.errMsgContact').addClass('animated bounceIn')
        } else if(data.email==""){
          $('.errMsgContact').removeClass('hide');
          $('.errMsgContact').addClass('animated bounceIn')
        }else if(data.phone==""){
          $('.errMsgContact').removeClass('hide');
          $('.errMsgContact').addClass('animated bounceIn')
        }else if(data.message==""){
          $('.errMsgContact').removeClass('hide');
          $('.errMsgContact').addClass('animated bounceIn')
        }else{$.ajax({
          type:"POST",
          url:"assets/js/send-mail.php",
          data:data,
          success:function(){
            $('.success').removeClass('hide');
            $('.success').addClass('animated bounceIn')}
          })}
          return!1
        })
      });

  });
