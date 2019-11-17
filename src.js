
var c1 = '';
var cnt = 0;
$('.card1').click(function(){
   $(this).animate({'top':'250px'});
    c1 = $(this);
});
$('.card2').click(function(){
    $(this).animate({'top':'100px', left: '730px'});
    c1.animate({'top':'100px', left: '730px'})
    //$(this).css({'margin-left':'10px','margin-top':'10px'});
    //c1.css({'margin-left':'10px','margin-top':'10px'});
    $(function(){
        if(cnt == 2){
            $('h2').fadeIn(2000,function(){
              console.log('塩焼きそば')
             });
            $('h2').fadeOut(1000,function(){
               console.log('役成立')
             });
        } else if (cnt == 4){
            $('h3').fadeIn(2000,function(){
                console.log('厳寒の肉祭り')
            });
            $('h3').fadeOut(1000,function(){
                console.log('役成立')
            });
            
        } else if (cnt == 5){
            $('h4').fadeIn(2000,function(){
                console.log('試される大地')
            });
            $('h4').fadeOut(1000,function(){
                console.log('役成立')
            });
        }
        
    });
    cnt++;
});
