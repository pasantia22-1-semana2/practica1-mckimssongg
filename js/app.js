
class Presupuesto{
    static conntadorPresupuesto = 0;
    constructor(){
        this._ingresos = [PrimerIngreso]
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

if (2<4){
    const Presupueston = new Presupuesto()
    Presupueston.agregarIngreso(PrimerIngreso)
    Presupueston.mostraIngresos()
    console.log("todo chill")
}

// Presupuesto.agregarIngreso(PrimerIngreso);
