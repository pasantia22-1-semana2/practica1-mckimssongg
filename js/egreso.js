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
            <div class="egresos__cuenta__valor">$ ${this._valor} <div class="egresos__porcentaje">$ ${_Porcentaje(this._valor)}</div></div> 
        </div>
        <hr>`
    }
}
const primerEgreso = new Egreso("prueba",200)
// console.log(primerEgreso.toString())
