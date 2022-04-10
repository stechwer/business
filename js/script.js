$(function () {
    var filter = $("[data-filter]");

    filter.on("click", function (event) {

        var category = $(this).data('filter');

        if (category == "all") {

            $("[data-category]").removeClass('hide')

        }
        else {
            $("[data-category]").each(function () {

                var workCat = $(this).data('category');

                if (workCat != category) {
                    $(this).addClass('hide');
                }
                else {
                    $(this).removeClass('hide');
                }

            });
        }
    });
});