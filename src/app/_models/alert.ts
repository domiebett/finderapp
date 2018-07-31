export class Alert {
  type: AlertType;
  message: string;

  constructor(message: string = null, type: AlertType = AlertType.Success) {
    this.message = message;
    this.type = type;
  }
}

export enum AlertType {
  Success,
  Error,
  Info,
  Warning
}
