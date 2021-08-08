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
        url: "/users",
        data: storedata,
        success: function (data) {
            alert("Data Stored");
        },
        error: function (err) {
            console.log(err);
        }
    });
});

/* --------x-----------x---------x--------- */

/* For displaying all records on clicking Display DB */

$("#displaydb").click(function(){
    $.ajax({
        type:"GET",
        url:"/users/displaydb",
        success:function(data){
            console.log("Inside displayDB ajax success")
            console.log(data);
            document.getElementById('dboutput').innerHTML="<br>"+JSON.stringify(data)+"<br>";
        },
        error:function(err){
            console.log(err);
        }
    });
})

/* --------x----------x------------x--------- */