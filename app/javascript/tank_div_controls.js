function MoveTank(event){
    position = $('hidden_mouse_position')[0].getValue();
    var y = event.clientY;
    if (y < position) {
        $('tank_body').setStyle({
            bottom : '80px'
        });
    }
    else{
        $('tank_body').setStyle({
            bottom : '30px'
        });
    }
    console.log(position, y);
}

function RevertTank(){
    $('tank_body').setStyle({
        bottom: '50px'
    });
}

function SetInitPosition(event){
    $('hidden_mouse_position').setValue(event.clientY);
}
function request(req) {
    src='http://192.168.42.202/' + req;
    new Ajax.Request(src, {
        method: 'get',
        onSuccess: function(transport) {
            var response = transport.responseText || "no response text";
            $("fotoimage").setStyle({display: 'block'});
            $("fotoimage").setAttribute('src',src);
            hideImage.delay(5);
            savingFoto = false;
        },
        onFailure: function() { alert('Something went wrong...'); }
    });
}

function tankMove(angle ,speed) {
    request("rotate/0");
    request("move/0");

}


