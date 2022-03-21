
function formatoPorcetnaje(valor){
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}


class Presupuesto{
    constructor(){
        this._ingresos = []
        this._egresos = []
    }
    agregarEgreso(dato){
        this._egresos.push(dato);
    }
    agregarIngreso(dato){
        this._ingresos.push(dato);
    }
    mostraIngresos(){
        var egresoslista = ""
        for(let cuenta in this._egresos){
            egresoslista += `${this._egresos[cuenta].toString()}`
        }
        return egresoslista;
    }
    mostraIngresos(){
        var egresoslista = ""
        for(let cuenta in this._ingresos){
            egresoslista += `${this._ingresos[cuenta].toString()}`
        }
        return egresoslista;
    }
    totalIngresos(){
        var totalIngresos = ""
        for(let cuenta in this._ingresos){
            totalIngresos += this._ingresos[cuenta].this._valor 
        }
        return totalIngresos;
    }
    totalEgresos(){
        var totalEgresos = ""
        for(let cuenta in this._ingresos){
            totalEgresos += this._ingresos[cuenta].this._valor 
        }
        return totalEgresos;

    }
}

let egresoPrueba = new Egreso("Prueba descripcion", 88787)
let ingresoPrueba = new Ingreso("PrPrueba descripcion", 234)
const Presupueston = new Presupuesto()
Presupueston.agregarEgreso(egresoPrueba)
Presupueston.agregarIngreso(ingresoPrueba)




let formDatos = document.getElementById('formDatos');

function datosCuenta(){
    let descripcion = formDatos['descripcion'].value;
    let valor = formDatos['valor'].value;
    let tipoValor = formDatos['tipoValor'].value;

    if (tipoValor == "+"){
        let ingreso1 = new Ingreso(descripcion, valor)
        Presupueston.agregarIngreso(ingreso1)
    }
    else{
        let egreso1 = new Egreso(descripcion, valor)
        Presupueston.agregarEgresore(egreso1)
    }
}

