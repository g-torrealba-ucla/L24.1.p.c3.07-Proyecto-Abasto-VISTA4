export default class Cl_articulo {
    constructor(id, nombre, costo) {
        this.id = id;
        this.nombre = nombre;
        this.costo = costo;
    }
    pvp() {
        return this.costo * 1.25;
    }
    set id(id) {
        this._id = +id;
    }
    get id() {
        return this._id;
    }   
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
}