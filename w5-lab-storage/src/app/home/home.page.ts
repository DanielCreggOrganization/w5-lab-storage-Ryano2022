import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonLabel, IonInput,IonButton, FormsModule ],
})
export class HomePage {
  key: string = '';
  value: string = '';
  output: string = '';

  constructor(private storage: Storage) {
    storage.create();
  }

  async setItem() {
    try {
      await this.storage.set(this.key, this.value);
      this.output = "Set ${this.key}: ${this.value}";
    }
    catch (error) {
      console.error("Error getting item", error);
      this.output = "Error getting item: ${error}";
    }
  }

  async getItem() {
    try {
      const value = await this.storage.get(this.key);
      this.output = `Get ${this.key}: ${value}`;
    } 
    catch (error) {
      console.error('Error getting item', error);
      this.output = `Error getting item: ${error}`;
    }
  }

  async removeItem() {
    try {
      await this.storage.remove(this.key);
      this.output = `Removed ${this.key}`;
    }
    catch (error) {
      console.error('Error removing item', error);
      this.output = `Error removing item: ${error}`;
    }
  }

  async clearItems() {
    try {
      await this.storage.clear();
      this.output = 'Cleared all items';
    }
    catch (error) {
      console.error('Error clearing items', error);
      this.output = `Error clearing items: ${error}`;
    }
  }

  async keys() {
    try {
      const keys = await this.storage.keys();
      this.output = `Keys: ${keys}`;
    }
    catch (error) {
      console.error('Error getting keys', error);
      this.output = `Error getting keys: ${error}`;
    }
  }

  async length() {
    try {
      const length = await this.storage.length();
      this.output = `Length: ${length}`;
    }
    catch (error) {
      console.error('Error getting length', error);
      this.output = `Error getting length: ${error}`;
    }
  }

  async forEach() {
    try {
      await this.storage.forEach((value, key, index) => {
        this.output = `For each: ${key} ${value} ${index}`;
      });
    }
    catch (error) {
      console.error('Error in forEach', error);
      this.output = `Error in forEach: ${error}`;
    }
  }
}
