import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { NotesService } from "../services/notes.service";

@Component({
  selector: 'app-content',
  templateUrl: './content.page.html',
  styleUrls: ['./content.page.scss'],
})
export class ContentPage implements OnInit {

  notesData:any = {};

  constructor(private router: Router, public alertController: AlertController, private service: NotesService) { 
    this.notesData.title = '';
    this.notesData.content = '';
  }

  ngOnInit() {
  }

  saveNote() {
    if(this.notesData.title==''||this.notesData.content=='') {
      this.presentAlert();
    }
    else {
      var noteID = Math.random().toString(36).substr(2, 9); 
      this.service.addData(noteID, this.notesData.title, this.notesData.content);
      this.router.navigate(['/notes']);
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Attention',
      message: 'Please complete all input to save.',
      mode: 'ios',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
