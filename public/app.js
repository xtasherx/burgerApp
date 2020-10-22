$(function() {
    $("#burgerWaiting").on("click", function(event) {
  
    let bool = $(this).data("bool");
    let id = $(this).data("id");

    console.log(bool);
    console.log(id);


$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: bool
  }).then(
    function() {
    console.log(data);
    location.reload();
    }
  );
});
})
