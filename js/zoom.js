$(function(){
    $('#dataModal').on('show.bs.modal', function(e){
        var image = $(e.relatedTarget).attr('data-whatever');
        $('.dataImageZoom').attr('src', image);
    });
});