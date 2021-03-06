jQuery(document).ready( function($) {
    function media_upload(button_class) {
        var _custom_media = true,
        _orig_send_attachment = wp.media.editor.send.attachment;

        $('body').on('click', button_class, function(e) {
            var button_id ='#'+$(this).attr('id');
            var self = $(button_id);
            var send_attachment_bkp = wp.media.editor.send.attachment;
            var button = $(button_id);
            var id = button.attr('id').replace('_button', '');
            _custom_media = true;
            wp.media.editor.send.attachment = function(props, attachment){
                if ( _custom_media  ) {
                    $('.custom_media_id').val(attachment.id);
                    $('.king_media_url').val(attachment.url);
                    $('.king_media_image').attr('src',attachment.url).css('display','block');
                } else {
                    return _orig_send_attachment.apply( button_id, [props, attachment] );
                }
            }
            wp.media.editor.open(button);
                return false;
        });
    }
    media_upload('.button.king_media_button');
});



jQuery(document).ready( function(jQuery) { 
    jQuery("#pratik").change(function () {
        if(jQuery("#pratik").val()=='bgcolor') {
            jQuery(".bgnone").css("display", "none");
            jQuery(".bgimage").css("display", "none");
            jQuery(".bgcolor").css("display", "block");
        } 
        else if(jQuery("#pratik").val()=='bgimage'){
            jQuery(".bgnone").css("display", "none");
            jQuery(".bgimage").css("display", "block");
            jQuery(".bgcolor").css("display", "none"); 
        }
        else {
            jQuery(".bgnone").css("display", "block");
            jQuery(".bgimage").css("display", "none");
            jQuery(".bgcolor").css("display", "none"); 
        }
    });
});
