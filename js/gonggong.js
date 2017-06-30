/**
 * Created by hxsd on 2017/6/21.
 */
$('.hidden-bar-opener').click(function(){//点击显示导航手机端
    $('.un-hr-bar-l').addClass('weiyitwo').removeClass('weiyi');
})
$('.un-hr-bar-r').click(function(){//点击显示pc端
    $('.un-hr-bar-l').addClass('weiyitwo').removeClass('weiyi');
})
$('.fa-times').click(function () {//点击隐藏导航
    $('.un-hr-bar-l').addClass('weiyi').removeClass('weiyitwo');
})
$('.navlist .shownav').click(function(){
    var index=$(this).index()
    //console.log(index)

     $('.smalllist').eq(index-1).slideToggle();

})
$('.navlist li').click(function(){//给当前添加边框线
    $(this).addClass('ac').siblings().removeClass('ac')
})



//播放视频
$('#link').click(function () {
    console.log(111)
    var src ='../images/123456.mp4;autoplay=1';
    $('#myModal').modal('show');
    $('#myModal iframe').attr('src', src);
});

$('#myModal button').click(function () {
    $('#myModal iframe').removeAttr('src');
});

var num1=$('.num').html();
console.log(num1)
var num2=$('.num2').html();
var num3=$('.num3').html();
var num4=$('.num4').html();

var num1time=setInterval(function(){
    num1++;
   $('.num').html(num1);
    if(num1>65){
        clearInterval(num1time)
    }
},50)
var num2time=setInterval(function(){
    num2++;
    $('.num2').html(num2);
    if(num2>88){
        clearInterval(num2time)
    }
},50)
var num3time=setInterval(function(){
    num3++;
    $('.num3').html(num3);
    if(num3>90){
        clearInterval(num3time)
    }
},50)
var num4time=setInterval(function(){
    num4++;
    $('.num4').html(num4);
    if(num4>169){
        clearInterval(num4time)
    }
},50)


$('.topxuan .pintop').mouseenter(function(){
    $(this).addClass('chakan').siblings().removeClass('chakan')

})






//设定字体大小
$(window).resize(function(){
    var w=$(window).width();
    if(w<750){
        $('html').css({fontSize:w/6.4+'px'})
    }
})


