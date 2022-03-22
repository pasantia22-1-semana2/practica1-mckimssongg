var totalEgresos = 0
var totalIngresos = 0
class Presupuesto{
    static conntadorPresupuesto = 0;
    constructor(){
        this._ingresos = []
        this._egresos = []
        this._id = ++Presupuesto.conntadorPresupuesto;
    }
    get ingresos(){
        return this._ingresos;
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
    totalIngresos(){
        for(let cuenta in this._ingresos){
            totalIngresos += this._ingresos[cuenta]
        }
        return totalIngresos;
    }
    totalEgresos(){
        for(let cuenta in this._ingresos){
            totalEgresos += this._ingresos[cuenta]
        }
        return totalEgresos;
    }
}

const Presupuesto1 = new Presupuesto()


/* Formato de Moneda */
const formatMoney = (valor) =>{
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}
const _Porcentaje = (valor) =>{
    return valor.toLocaleString({style:'percent', minimumFractionDigits:2});
}


function CalTotales(){
    let totalPresupuesto = (parseInt(Presupuesto1.totalIngresos) - parseInt(Presupuesto1.totalEgresos))
    let total_presupuesto = document.querySelector('#total_presupuesto')
    let porcentajeTotal = document.querySelector('#porcentajeTotal')
    let egresosT = document.querySelector('#egresosT')
    Presupuesto1.totalIngresos
    Presupuesto1.totalEgresos
    let porcentajeYATOTAL = _Porcentaje(totalPresupuesto)
    porcentajeTotal.innerHTML = `${porcentajeYATOTAL}`
    egresosT.innerHTML = `${totalIngresos} <div class="egresos__egresos__valor__porcentaje" id="porcentajeTotal">${porcentajeYATOTAL}</div>`
    let ingresosT = document.querySelector('#ingresosT')
     ingresosT.innerHTML = `${totalEgresos}`
    total_presupuesto.innerHTML = `${totalPresupuesto}`
}


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
    tablaIngreso.innerHTML += Presupuesto1.mostraIngresos()
    tablaEgreso.innerHTML += Presupuesto1.mostraEgresos()
    CalTotales()
    console.log("todo chill")
}