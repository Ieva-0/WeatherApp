export class ForecastDuration {
    private _length: number;
    private _label: string;

    public get length() {
        return this._length;
    }

    public set length(value: number) {
        this._length = value;
    }

    public get label() {
        return this._label;
    }

    public set label(value: string) {
        this._label = value;
    }

    constructor(length: number, label: string) {
        this._length = length;
        this._label = label;
    }
}