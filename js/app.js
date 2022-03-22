var ingreso1 = [
    new Ingreso('Salario', 5000.00)
]

var egreso1 = [
    new Egreso('PC master Race', 500.00),
    new Egreso('RTX 3090', 1000.00)
]

class Presupuesto{
    static conntadorPresupuesto = 0;
    constructor(){
        this._ingresos = ingreso1
        this._egresos = egreso1
        this._id = ++Presupuesto.conntadorPresupuesto;
    }
    get ingresos(){
        return this._ingresos;
    }
    get egresos(){
        return this._egresos;
    }
    agregarEgreso(dato){
        this._egresos.push(dato);
    }
    agregarIngreso(dato){
        this._ingresos.push(dato);
    }
    mostraEgresos(){
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
}

const Presupuesto1 = new Presupuesto()


/* Formato de Moneda */
const formatMoney = (valor) =>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}
const _Porcentaje = (valor) =>{
    return valor.toLocaleString('en-US', {style:'percent', minimumFractionDigits:1});
}


function totalIngresos(){
    var totalIngresos = 0
    for (i in Presupuesto1._ingresos){
        totalIngresos += Presupuesto1._ingresos[i].valor
    }
    // return console.log(totalIngresos);
    return totalIngresos;
}
function totalEgresos(){
    var totalEgresos = 0
    for (i in Presupuesto1._egresos){
        totalEgresos += Presupuesto1._egresos[i].valor
    }
    // return console.log(totalEgresos);
    return totalEgresos
}
// totalEgresos();
// totalEgresos();

// let porcentajeEgreso = totalEgresos()/totalIngresos()
// let porcentajeYATOTAL = _Porcentaje(porcentajeEgreso)

function CalTotales(){
    let totalPresupuesto = totalIngresos()-totalEgresos()
    // return console.log(totalPresupuesto)
    let total_presupuesto = document.querySelector('#total_presupuesto')
    total_presupuesto.innerHTML = `${formatMoney(totalPresupuesto)}`
    
    
    let egresosT = document.querySelector('#egresosT')
    let ingresosT = document.querySelector('#ingresosT')
    
    let porcentajeEgreso = totalEgresos()/totalIngresos()
    let porcentajeYATOTAL = _Porcentaje(porcentajeEgreso)
    console.log(porcentajeYATOTAL)
    egresosT.innerHTML = `${totalEgresos()} <div class="egresos__egresos__valor__porcentaje" id="porcentajeTotal">${porcentajeYATOTAL}</div>`
    ingresosT.innerHTML = `${totalIngresos()}`
}
// CalTotales()

function datosCuenta(){
    let tablaIngreso = document.querySelector('#tbl_ingresos')
    let tablaEgreso = document.querySelector('#tbl_egreso')
    let formularioDatos = document.querySelector('#formularioDatos')
    let tipoValor = formularioDatos['tipoValor'].value
    let descripcion = formularioDatos['descripcion'].value
    let valor = formularioDatos['valor'].value
    if (tipoValor == "+"){
        const nuevoIngreso = new Ingreso(descripcion,valor)
        Presupuesto1.agregarIngreso(nuevoIngreso)
    }
    if (tipoValor == "-"){
        const nuevoEgreso = new Egreso(descripcion,valor)
        Presupuesto1.agregarEgreso(nuevoEgreso)
    }
    // console.log(Presupuesto1.ingresos)
    // Presupuesto1.agregarIngreso(PrimerIngreso)
    // console.log(Presupuesto1.ingresos)
    tablaIngreso.innerHTML = Presupuesto1.mostraIngresos()
    tablaEgreso.innerHTML = Presupuesto1.mostraEgresos()
    CalTotales()
    console.log("todo chill")
}

// let tablaIngreso = document.querySelector('#tbl_ingresos')
// let tablaEgreso = document.querySelector('#tbl_egreso')
// let formularioDatos = document.querySelector('#formularioDatos')
// let tipoValor = formularioDatos['tipoValor'].value
// let descripcion = formularioDatos['descripcion'].value
// let valor = formularioDatos['valor'].value
// tablaIngreso.innerHTML += Presupuesto1.mostraIngresos()
// tablaEgreso.innerHTML += Presupuesto1.mostraEgresos()