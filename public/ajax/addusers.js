/* For storing data on clicking storedata */

$("#storedata").click(function () {
    let fname = $("#fname").val();
    let city = $("#city").val();
    let storedata = {
        fname: fname,
        city: city
    };
    $.ajax({
        type: "POST",
        url: "/addusers",
        data: storedata,
        success: function (data) {
            alert("Data Stored");
            $("#addusersform>input ").val('');
        },
        error: function (err) {
            console.log(err);
        }
    });
});

/* --------x-----------x---------x--------- */

/* For displaying all records on clicking Display DB */

$("#displaydb").click(function () {
    $.ajax({
        type: "GET",
        url: "/addusers/displaydb",
        success: function (data) {
            console.log("Inside displayDB ajax success")
            console.log(data);
            $("#dboutput").html("<br>" + JSON.stringify(data) + "<br>");
        },
        error: function (err) {
            alert(err.message);
            console.log(err);
        }
    });
})

/* --------x----------x------------x--------- */