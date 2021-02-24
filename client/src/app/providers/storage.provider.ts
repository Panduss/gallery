import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class StorageProvider {

  constructor(
    private router: Router,
    private storage: Storage
  ) {
  }

  public async getFromStorage<T>(keyword: string): Promise<T> {
    return await this.storage.get(keyword).catch();
  }

  public setInStorage<T>(key: string, value: any): void {
    this.storage.setItem(key, value);
  }

  public removeFromStorage<T>(key: string): void {
    this.storage.removeItem(key);
  }

  public clearStorage(): void {
    this.storage.clear();
  }
}
