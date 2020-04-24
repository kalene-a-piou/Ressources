function toolTipFormAppend() {
    categorySelectContainer = $('#post_category_select').closest('.form-group.relative');
    postTitleContainer = $('#post_title').closest('.form-group.relative');
    postdescriptionContainer = $('#post_description').closest('.form-group.relative');
    userFileAttachmentContainer = $('#user_file_attachments');

    categorySelectContainer.mouseenter(function() {
        $(this).append(" <div class='info-tooltip'><p class='m-2'> Etape 1: Choisir la catégorie du produit </p> </div>")
    });
    categorySelectContainer.mouseleave(function() {
        $(this).find('.info-tooltip').remove();
    });
    postTitleContainer.mouseenter(function() {
        $(this).append(" <div class='info-tooltip'><p class='m-2'> Etape 2: Trouver un titre pour votre annonce </p> </div>")
    });
    postTitleContainer.mouseleave(function() {
        $(this).find('.info-tooltip').remove();
    });
    postdescriptionContainer.mouseenter(function() {
        $(this).append(" <div class='info-tooltip'><p class='m-2'> Etape 3: Decrire de façon clair le produit proposé et les modalitées d'achat et/ou livraison</p> </div>")
    });
    postdescriptionContainer.mouseleave(function() {
        $(this).find('.info-tooltip').remove();
    });

    userFileAttachmentContainer.mouseenter(function() {
        $(this).append(" <div class='info-tooltip'><p class='m-2'> Etape 4: Ajouter des photos, elle apporteront de la visibilité à votre annonce</p> </div>")
    });
    userFileAttachmentContainer.mouseleave(function() {
        $(this).find('.info-tooltip').remove();
    });
};