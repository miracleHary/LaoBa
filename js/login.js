$(document).ready(function () {
var alerts=new Vue({
    el:'#alert-link',
    data:{
        alert:"请输入用户名"
    }
});
$('#login').click(function () {
    if($('#name').val().length==0){
        $(".alert-danger").show();
    }else if($('#password').val().length==0){
        $(".alert-danger").show();
        alerts.alert="请输入密码"
    }else if($('#name').val().length!=0&&$('#password').val().length!=0){

    }

})

$('#name').bind('input propertychange', function(){
    var username=$(this).val();
    if(username.length!=0){
        $(".alert-danger").hide();
    }
})
$('#password').bind('input propertychange', function(){
    var password=$(this).val();
    if(password.length!=0){
        $(".alert-danger").hide();
    }
})
})