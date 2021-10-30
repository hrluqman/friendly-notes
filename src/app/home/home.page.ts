import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { NotesService } from "../services/notes.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  allNotes:any = [];
  filteredNote:any = [];
  searchKeyword:string = '';

  constructor(private service: NotesService, public alertController: AlertController, public loadingController: LoadingController) {}

  ionViewWillEnter() {
    this.presentLoading();
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  async loadData() {
    this.allNotes = await this.service.getData();
    this.allNotes==null? this.allNotes=[]:this.allNotes=this.allNotes;    
  }

  filterNotes() {
    this.filteredNote = [];
    if(this.searchKeyword=='') {
      this.filteredNote = [];
    }
    else {
      for(var i in this.allNotes) {
        if(this.allNotes[i].title.toLowerCase().includes(this.searchKeyword.toLowerCase())) {
          this.filteredNote.push(this.allNotes[i]);
        }
      }
    }
  }

  deleteNote(noteID) {
    this.service.removedSpecific(noteID);
    setTimeout(() => {
      this.loadData();
    }, 1000);
  }

  async askToDelete(event) {
    var noteID = event.path[4].id;
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Warning',
      message: 'Are you sure you want to delete this note?',
      mode: 'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        }, {
          text: 'Okay',
          handler: () => {
            this.deleteNote(noteID);
          }
        }
      ]
    });

    await alert.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
      mode: 'ios',
      duration: 1000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
  }

}


// After search no data show icon