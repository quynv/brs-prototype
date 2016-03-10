$(document).ready(function(){

})

$(document).on('click', '#modal-icon img', function(){
	var src = $(this).attr('src');
	var name = src.split("/").pop().split(".gif")[0];

	var textarea =  $('#comment-area').find('textarea');
	var cursorPos = $(textarea).prop('selectionStart');
    var value = $(textarea).val();
    var textBefore = value.substring(0,  cursorPos);
    var textAfter  = value.substring(cursorPos, value.length);

    $(textarea).val(textBefore + ":"+name+":" + textAfter);
});