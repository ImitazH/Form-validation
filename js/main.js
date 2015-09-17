$('document').ready(function(){
    /*===========LOG IN===========*/
   $('#passlogin').keyup(function(){
       var pass = $('#passlogin').val().length;
       if( pass < 1){
           $('.note').text('');
           $('.note').removeClass('red');
           $('.note').removeClass('orange');
           $('.note').removeClass('green');
       } else if( pass < 7){
           $('.note').text('Weak');
           $('.note').addClass('red');
           $('.note').removeClass('orange');
           $('.note').removeClass('green');
       } else if( pass < 10){
           $('.note').text('Good');
           $('.note').removeClass('red');
           $('.note').addClass('orange');
           $('.note').removeClass('green'); 
       } else if( pass > 10){
           $('.note').text('Strong');
           $('.note').removeClass('red');
           $('.note').removeClass('orange');
           $('.note').addClass('green');
       }
   });
   /*==========Gallery=============*/
    $(document).ready(function(){
     $("#show").click(function(){
     $("#des").show(1000);
     $("#web").show(1000);
     $("#seo").show(1000);
     });
     $("#design").click(function(){
     $("#des").show(1000);
     $("#web").hide(1000);
     $("#seo").hide(1000);
     });
     $("#webdev").click(function(){
     $("#des").hide(1000);
     $("#web").show(1000);
     $("#seo").hide(1000);
     });
     $("#seo1").click(function(){
     $("#des").hide(1000);
     $("#web").hide(1000);
     $("#seo").show(1000);
     });

        $(".thumb").css("opacity", 1);
        $(".thumb").mouseover(function(){
            $(this).fadeTo(100, 0.5);
        });
        $(".thumb").mouseout(function(){
            $(this).fadeTo(100, 1);
        });

    });
   /*==========Gallery=============*/
    /*=========Sign Up Form========*/
    $('#passsign').keyup(function(){
       var pass = $('#passsign').val().length;
       if( pass < 1){
           $('.notepass').text('');
           $('.notepass').removeClass('red-area');
           $('.notepass').removeClass('orange-area');
           $('.notepass').removeClass('green-area');
       } else if( pass < 8){
           $('.notepass').text('Must be more than 8!');
           $('.notepass').addClass('red-area');
           $('.notepass').removeClass('orange-area');
           $('.notepass').removeClass('green-area');
       } else if( pass < 13){
           $('.notepass').text('Fair enough!!');
           $('.notepass').removeClass('red-area');
           $('.notepass').addClass('orange-area');
           $('.notepass').removeClass('green-area'); 
       } else if( pass > 10){
           $('.notepass').text('Perfect!!!');
           $('.notepass').removeClass('red-area');
           $('.notepass').removeClass('orange-area');
           $('.notepass').addClass('green-area');
       }
   });
    $('#msg').keyup(function(){
        var len = $('#msg').val().length;
        var rem = 200 - len;
        $('.area_note').text(rem + '/');
    });
});