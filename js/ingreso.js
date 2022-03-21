class Ingreso extends Dato{
    static contadoringreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++Ingreso.contador;
    }
    get idingreso() {
        return this._id
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