class Egreso extends Dato{
    static contadorEgreso = 0;
    constructor(descripcion, valor){
        super(descripcion, valor)
        this._id = ++Egreso.contador;
        this._percentage = 0;
    }
    get idEgreso() {
        return this._id
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
