import { formatDate } from '@angular/common';

export class ForecastData {
    private _date: Date;
    private _minTemp: number;
    private _maxTemp: number;
    private _precipitationSum: number;
    private _precipitationProbability: number;
    private _uvIndex: number;
    private _weatherCode: number;
    private _windGusts: number;
    private _windDirection: number;

    public get date() {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get minTemp() {
        return this._minTemp;
    }

    public set minTemp(value: number) {
        this._minTemp = value;
    }

    public get maxTemp() {
        return this._maxTemp;
    }

    public set maxTemp(value: number) {
        this._maxTemp = value;
    }

    public get precipitationSum() {
        return this._precipitationSum;
    }

    public set precipitationSum(value: number) {
        this._precipitationSum = value;
    }

    public get precipitationProbability() {
        return this._precipitationProbability;
    }

    public set precipitationProbability(value: number) {
        this._precipitationProbability = value;
    }

    public get uvIndex() {
        return this._uvIndex;
    }

    public set uvIndex(value: number) {
        this._uvIndex = value;
    }

    public get weatherCode() {
        return this._weatherCode;
    }

    public set weatherCode(value: number) {
        this._weatherCode = value;
    }

    public get windGusts() {
        return this._windGusts;
    }

    public set windGusts(value: number) {
        this._windGusts = value;
    }

    public get windDirection() {
        return this._windDirection;
    }

    public set windDirection(value: number) {
        this._windDirection = value;
    }

    
    constructor(date: string, minTemp: number, maxTemp: number, precipitationSum: number, precipitationProbability: number, uvIndex: number, weatherCode: number, windGusts: number, windDirection: number) {
        this._date = new Date(date);
        this._minTemp = minTemp;
        this._maxTemp = maxTemp;
        this._precipitationSum = precipitationSum;
        this._precipitationProbability = precipitationProbability;
        this._uvIndex = uvIndex;
        this._weatherCode = weatherCode;
        this._windGusts = windGusts;
        this._windDirection = windDirection;
    }

    public getWeekdayAbbreviation() {
        return this.date.toLocaleDateString('en-US', { weekday: 'short' }); 
    }

    public getDateFormatted(format: string) {
        return formatDate(this.date, format, 'en-US');
    }
}