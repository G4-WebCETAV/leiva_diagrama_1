/*
Calcular lo que hay que pagarle a un trabajador teniendo en cuenta su sueldo 
y las horas extras trabajadas. Para el pago de horas extras 
se toma en cuenta la categoría del trabajador.

Categoria  Precio Hora Extra
1            $30
2            $38
3            $50
4            $70

Cada trabajador puede tener como máximo 30 horas extras, 
si tienen mas, solo se les pagarán 30. A los trabajadores 
con categoría 4 no debemos pagarle horas extra.
*/

let ct = prompt('Del 1 al 4 ¿Cuál es la categoría del empleado?');
ct = parseFloat(ct);
//categoría del empleado
let salario = prompt('¿Cuál es salario del empleado?');
ht = parseFloat(salario);
//salario
let he = prompt('Cuántas horas extra trabajó el empleado');
he = parseFloat(he);
//horas extra
let precio;

document.getElementById('mensajito').innerHTML = '<h1>Ve a la consola</h1>';

if( !( isNaN(salario)&&isNaN(he) ) ){
    switch(ct){
        case 1: 
            precio = 30;
            break;
        case 2: 
            precio = 38;
            break;
        case 3: 
            precio = 50;
            break;
        case 4: 
            precio = 70;
            break;
        default:
            precio = 'inválido porque cuando se introdujo la categoría del empleado se ingresó un valor incorrecto';    
    }

    salario = Math.abs(salario);
    he = Math.abs(he);
    //Pa que no pongan valores negativos
    
    if(ct == 1 || ct == 2 || ct == 3){  
        if(he > 30){
            he = 30;
        }
        precio = salario + precio * he;
    }else if(ct == 4){
        precio = salario;
    }
    console.log(`El salario del empleado es ${precio}`);
}else{
    console.log(`El salario y las horas extra deben corresponder a números`);
}