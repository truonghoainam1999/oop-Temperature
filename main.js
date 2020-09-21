let Temperature = function(c){
    this.c = c;
    if(c >= -273){
        this.getF = function(){
            return (c *  1.8) + 32 ;
        }
        this.getKelvin = function(){
            return c + 273.15 ;
        }
    }
    else{
        alert('Nhiệt độ không cho phép vui lòng nhập lại nhiệc độ :');
        c = parseInt(prompt("Nhập độ C bạn muốn quy đổi "))
    }
}

let c = parseInt(prompt("Nhập độ C bạn muốn quy đổi "));
let temperature = new Temperature(c);
let f = temperature.getF();
let kenlin = temperature.getKelvin();

alert(`Với số nhiệt ${c} C thì tương ướng với ${f} F và ${kenlin} Kelvin .`)
