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