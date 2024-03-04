export class City {
    private _name: string;
    private _latitude: number;
    private _longitude: number;

    public get name() {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get latitude() {
        return this._latitude;
    }

    public set latitude(value: number) {
        this._latitude = value;
    }

    public get longitude() {
        return this._longitude;
    }

    public set longitude(value: number) {
        this._longitude = value;
    }

    constructor(name: string, latitude: number, longitude: number) {
        this._name = name;
        this._latitude = latitude;
        this._longitude = longitude;
    }
}