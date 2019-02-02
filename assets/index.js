$(function(){

    /**
     * 日報の生成ロジック
     */
    $('.generate').on('click', function(){
        var target   = $('.generatedNippou'),
            body     = '',
            max      = 8;

        for (i=1; i<=max; i++) {
            record = '';
            if ($('#detail-' + i).val() !== '') {
                record = $('#kousu-' + i).val() + 'h '
                    + $('#classify-' + i).val() + ' '
                    + $('#detail-' + i).val();
            }

            body = body + record;
        }

        target.val(body);
    });
});
