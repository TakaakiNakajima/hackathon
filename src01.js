
var c1 = '';
var cnt = 0;
$('.card1').click(function(){
   $(this).animate({'top':'250px'});
    c1 = $(this);
});
$('.card2').click(function(){
    $(this).animate({'top':'100px', left: '730px'});
    c1.animate({'top':'100px', left: '730px'})
    $(function(){
        if(cnt == 2){
            $('h2').fadeIn(2000,function(){
             console.log('ナウテスティファイ！')
             });
              $('h2').fadeOut(1000,function(){
              console.log('ワズテスティファイ！')
             });
        } else if (cnt == 4){
            $('h3').fadeIn(2000,function()
            
        }
        
    });
    cnt++;
});
