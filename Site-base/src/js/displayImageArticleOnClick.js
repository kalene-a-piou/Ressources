function displayImageArticleOnClick() {

    $('.card-article').click(function() {
        var imageSrc = $(this).find('img').attr('src');
        $('#productImage').find('img').attr('src', imageSrc)
    });
};