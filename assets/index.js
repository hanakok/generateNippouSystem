$(function(){

    /**
     * 日報の生成ロジック
     */
    $('.generate').on('click', function(){
        var kousu    = $('.kousu01').val(),
            classify = $('.classify01').val(),
            detail   = $('.detail01').val(),
            target   = $('.generatedNippou');

        target.val(kousu + ' ' + classify + ' ' + detail);
    });
});

