$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function (data) {
                //console.log('data', data)
        var items = [];
                //console.log(items)
        $.each(data, function (key, value) {
                //console.log('value', value )
            items.push("<tr><td>" + value.name + "</td><td>" + value.description + 
            "</td><td><a href='https://www.google.com/maps?q=" + value.location + "'>link</a></td></tr>");
        });
        $("table").append(items);
    });
});
