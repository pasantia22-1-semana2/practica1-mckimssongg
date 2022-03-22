class Ingreso{
    static contadoringreso = 0;
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Ingreso.contadoringreso;
    }
    get idingreso() {
        return this._id
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
    toString(){
        return `
        <div class="tabla__ingreso__cuenta cuentaEstilo">
        <div class="ingresos__cuenta__descripcion">${this._descripcion}</div>
        <div class="ingresos__cuenta__valor">$ ${this._valor}</div>
        </div>
        <hr>`
    }
}
const PrimerIngreso = new Ingreso("Prueba",200)
// console.log(PrimerIngreso.toString())

class Egreso{
    static contadorEgreso = 0;
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
        this._id = ++Egreso.contadorEgreso;
        this._percentage = 0;
    }
    get idEgreso() {
        return this._id
    }
    get descripcion(){
        return this._descripcion;
    }
    set descripcion(descripcion){
        this._descripcion = descripcion;
    }
    get valor(){
        return this._valor;
    }
    set valor(valor){
        this._valor = valor;
    }
    toString(){
        return `
        <div class="tabla__egresos__cuenta cuentaEstilo">
            <div class="egresos__cuenta__descripcion">${this._descripcion}</div>
            <div class="egresos__cuenta__valor">${this._valor}</div> 
        </div>
        <hr>`
    }
}
const primerEgreso = new Egreso("prueba",200)
// console.log(primerEgreso.toString())


class Presupuesto{
    static conntadorPresupuesto = 0;
    constructor(){
        this._ingresos = []
        this._egresos = []
        this._id = ++Presupuesto.conntadorPresupuesto;
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
    // totalIngresos(){
    //     var totalIngresos = ""
    //     for(let cuenta in this._ingresos){
    //         totalIngresos += this._ingresos[cuenta].this._valor 
    //     }
    //     return totalIngresos;
    // }
    // totalEgresos(){
    //     var totalEgresos = ""
    //     for(let cuenta in this._ingresos){
    //         totalEgresos += this._ingresos[cuenta].this._valor 
    //     }
    //     return totalEgresos;

    // }
}


function datosCuenta(){
    const Presupueston = new Presupuesto()
    Presupueston.agregarIngreso(PrimerIngreso)
    console.log(Presupueston.mostraIngresos())
}

// Presupuesto.agregarIngreso(PrimerIngreso);
