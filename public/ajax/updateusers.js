/* For updating Data */

$("#updatedata").click(function(){
    let modifydata={};
    let prim_key=$("#prim_key").val();
    let fname=$("#fname").val();
    let city=$("#city").val();
    modifydata={
        prim_key:prim_key,
        fname:fname,
        city:city
    };
    $.ajax({
        type:"POST",
        url:"/updateusers",
        data:modifydata,
        success:function(data){
            if(data.status==200){
                alert("Data Updated");
                $("#updateusersform>input").val('');
            }
            else{
                alert("Data not Found");
            }
        },
        error:function(err){
            console.log(err);
        }
    });
});


/* ---------------------------------------- */

/* For displaying all records on clicking Display DB */

$("#displaydb").click(function () {
    $.ajax({
        type: "GET",
        url: "/updateusers/displaydb",
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