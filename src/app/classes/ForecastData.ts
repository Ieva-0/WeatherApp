import { formatDate } from '@angular/common';

export class ForecastData {
    private _date: Date;
    private _minTemp: number;
    private _maxTemp: number;
    private _precipitationSum: number;
    private _uvIndex: number;
    private _weatherCode: number;
    private _windGusts: number;
    private _windDirection: number;

    public hourlyData: HourlyData[] = [];

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


    constructor(date: string, minTemp: number, maxTemp: number, precipitationSum: number, uvIndex: number, weatherCode: number, windGusts: number, windDirection: number) {
        this._date = new Date(date);
        this._minTemp = minTemp;
        this._maxTemp = maxTemp;
        this._precipitationSum = precipitationSum;
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

export class HourlyData {
    private _hour: string;
    private _temperature: number;
    private _humidity: number;
    private _apparentTemp;
    private _precipitationSum: number;
    private _precipitationProbability: number;
    private _windGusts: number;

    public get hour() {
        return this._hour;
    }

    public set hour(value: string) {
        this._hour = value;
    }

    public get temperature() {
        return this._temperature;
    }

    public set temperature(value: number) {
        this._temperature = value;
    }

    public get humidity() {
        return this._humidity;
    }

    public set humidity(value: number) {
        this._humidity = value;
    }

    public get apparentTemp() {
        return this._apparentTemp;
    }

    public set apparentTemp(value: number) {
        this._apparentTemp = value;
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

    public get windGusts() {
        return this._windGusts;
    }

    public set windGusts(value: number) {
        this._windGusts = value;
    }


    constructor(hour: string, temperature: number, humidity: number, apparentTemp: number, precipitationSum: number, precipitationProbability: number, windGusts: number) {
        this._hour = hour
        this._temperature = temperature;
        this._humidity = humidity;
        this._apparentTemp = apparentTemp;
        this._precipitationSum = precipitationSum;
        this._precipitationProbability = precipitationProbability;
        this._windGusts = windGusts;
    }

}