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
}

const Presupueston = new Presupuesto()

function formatoPorcetnaje(valor){
    return valor.toLocaleString('en-US',{style:'currency', currency:'USD', minimumFractionDigits:2});
}
