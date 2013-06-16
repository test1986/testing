$.support.cors = true;
jQuery.support.cors = true;            
            $(document).ready(function () {

                $.getJSON('http://localhost:4763/api/Mobile', function (contactsJsonPayload) {
                    $(contactsJsonPayload).each(function (i, item) {
                        var path = 'http://localhost:4763'
                        $('#items').append('<td>' + item.Title + '<br/>' +
                        '<img src="' + path + item.ProductArtUrl + '"/></a>' + '<br/>' + item.Price + '</td>');
                    });
                });
            });


            function show() {

                var Id = $('#itId').val();

                $.getJSON("http://localhost:4763/api/Mobile/" + Id,

                    function (Data) {

                        var str = Data.Title + ': $' + Data.Price;

                        $('#items').text(str);

                    })

                .fail(

                    function (jqXHR, textStatus, err) {

                        $('#items').text('Error: ' + err);

                    });

            }