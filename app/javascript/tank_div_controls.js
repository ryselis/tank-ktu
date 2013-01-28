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
