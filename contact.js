$(document).on('click', '#addUser', function(){
    $('#contactCards').append('<div class="contactCard"><h1>' + $('#firstName:text').val() + ' </h1><h1>' +
        $('#lastName:text').val() + '</h1><p>Click for description!</p><span>' +
        $('#descBox').val() + '</span></div>');
    $('#firstName, #lastName, #descBox').val("");
})

$(document).on('click', "#addUser", function(){
    $('span').attr("hidden", true);
})

$(document).on('click', '.contactCard', function(){
    $(this).children().toggle();
})