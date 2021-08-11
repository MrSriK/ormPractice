/* For deleting data on clicking delete data */

$("#deletedata").click(function () {
    let params = {};
    let prim_key = $("#prim_key").val();
    params['prim-key'] = prim_key;
    $.ajax({
        type: "POST",
        url: "/deleteusers",
        data: { params: prim_key },
        success: function (data) {
            if(data.status==200){
                alert("Data deleted");
                $("#deleteusersform>input").val('');
            }
            else{
                alert("Data not found");
            }
        },
        error: function (err) {
            console.log(err);
        }

    });
});

/* -------x---------x-----------x----------- */

/* For displaying all records on clicking Display DB */

$("#displaydb").click(function () {
    $.ajax({
        type: "GET",
        url: "/deleteusers/displaydb",
        success: function (data) {
            console.log("Inside displayDB ajax success")
            console.log(data);
            $("#dboutput").html("<br>" + JSON.stringify(data) + "<br>");
        },
        error: function (err) {
            console.log(err);
        }
    });
})

/* --------x----------x------------x--------- */