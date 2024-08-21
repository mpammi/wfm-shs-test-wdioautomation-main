import { appEnvironment } from '../config/wdio.master.conf.ts';
import fs from 'fs';

export class AppConfigDataProvider {
  private AppUrl: string;
  private Login: string;
  private Password: string;

  /**
   * Constructor takes user as parameter to initalize.
   * Initializes AppUrl, Login and Password properties.
   *
   * @param user
   */
  constructor(user?: string) {
    let appConfigPath = './config/appConfig.'+ appEnvironment +'.json';
    var appConfig = JSON.parse(fs.readFileSync(appConfigPath, 'utf-8'));
    this.AppUrl = appConfig["appUrl"];
    if (user !== undefined) {
      if (appConfig["users"][user] !== undefined) {
        this.Login = appConfig["users"][user].login;
        this.Password = appConfig["users"][user].password;
      } else {
        throw new Error(`Cannot find user credentials for user : ${user}`);
      }
    }
  }

  /**
   * Gets the App url
   *
   * @returns App Url
   */
  public get appUrl(): string {
    return this.AppUrl;
  }

  /**
   * Gets the UserName
   * @returns userName to login to app
   */
  public get userLogin(): string {
    return this.Login;
  }

  /**
   * Gets the password
   * @returns password to login to app
   */
  public get userPassword(): string {
    return this.Password;
  }
}
