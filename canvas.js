var caller = $("#emcee"),
    box = $("#box");

function foo()
{
    var randX = Math.floor(Math.random() * ($('#box').width()));
    var randY = Math.floor(Math.random() * ($('#box').height()  ));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});

}

$(document).ready(function() {
    
    caller.on('mouseenter', foo);
    caller.on('click', function(){
        alert('The secret is not here! Where can it be? Inspect me where I yell and shout');
    });
    
});