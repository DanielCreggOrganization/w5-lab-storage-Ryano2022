import { inject, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage = inject(Storage);
  constructor() {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  public async set(key: string, value: string) {
    try {
      await this.storage.set(key, value);
    }
    catch (error) {
      console.error('Error setting key "${key}":', error);
      throw error;
    }
  }

  public async get(key: string) {
    try {
      return await this.storage.get(key);
    }
    catch (error) {
      console.error('Error getting key "${key}":', error);
      throw error;
    }
  }

  public async remove(key: string) {
    try {
      await this.storage.remove(key);
    }
    catch (error) {
      console.error('Error removing key "${key}":', error);
      throw error;
    }
  }

  public async clear() {
    try {
      await this.storage.clear();
    }
    catch (error) {
      console.error('Error clearing keys:', error);
      throw error;
    }
  }

  public async keys() {
    try {
      return await this.storage.keys();
    }
    catch (error) {
      console.error('Error getting keys:', error);
      throw error;
    }
  }

  public async length() {
    try {
      return await this.storage.length();
    }
    catch (error) {
      console.error('Error getting length:', error);
      throw error;
    }
  }

  public async forEach(iteratorCallback: (value: any, key: string, iterationNumber: Number) => any) {
    try {
      await this.storage.forEach(iteratorCallback);
    }
    catch (error) {
      console.error('Error iterating keys:', error);
      throw error;
    }
  }

  public async exists(key: string): Promise<boolean> {
    try {
      const value = await this.get(key);
      return value !== null;
    }
    catch (error) {
      console.error('Error checking key "${key}":', error);
      throw error;
    }
  }
}
