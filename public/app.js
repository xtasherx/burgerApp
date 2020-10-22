$(function() {
    $(".burgerWaiting").on("click", function(event) {
  
    let bool = $(this).data("bool");
    let id = $(this).data("id");

    console.log(bool);
    console.log(id);


$.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: bool
  }).then(function(response) {
      console.log(response);
      if (response.status === 'success') {
        /* PUT success! */
        location.reload();
      }else{
        /* PUT failed! */
        alert("There was a fail in PUT")
      }
    }).catch(function(err){
      console.error(err);
    });
});
})
