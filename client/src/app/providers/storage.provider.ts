import { Inject, Injectable } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "ngx-webstorage-service";

@Injectable({
  providedIn: "root",
})
export class StorageProvider {

  constructor(
    @Inject(SESSION_STORAGE) private storage: StorageService
  ) {
  }

  public async getItem<T>(keyword: string): Promise<T> {
    return await this.storage.get(keyword);
  }

  public setItem<T>(key: string, value: any): void {
    this.storage.set(key, value);
  }

  public removeItem<T>(key: string): void {
    this.storage.remove(key);
  }

  public clearStorage(): void {
    this.storage.clear();
  }
}
