function displayModal(targetedModal, buttonOpenModal, buttonCloseModal, modalContent, imageContainer) {

    var closeModal = $(buttonCloseModal);
    var openModal = $(buttonOpenModal);
    var modal = $(targetedModal);
    var modalContent = $(modalContent)

    var imageSrc = $(imageContainer).find('img.imageProduct').attr('src')


    openModal.click(function() {
        modal.css({
            'height': '100vh'
        });

        modalContent.find('img.imageProductModal').attr('src', imageSrc)

        setTimeout(function() {
            modalContent.css({
                'display': 'flex'
            });
        }, 250)

    });

    closeModal.click(function() {
        modal.css({
            'height': '0'
        });
        modalContent.css({
            'display': 'none'
        });
    });

}