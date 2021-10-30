import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

const FRIENDLY_NOTE = 'friendlynotes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private storage: Storage) { 
    this.init();
    // storage.clear();
  }

  async init() {
    await this.storage.create();
  }

  getData() {
    return this.storage.get(FRIENDLY_NOTE) || [];
  }

  addData(noteID, title, content) {
    this.storage.get(FRIENDLY_NOTE).then(result => {
      if (result) {        
        result.push({
          id: noteID,
          title: title,
          content: content
        });
        return this.storage.set(FRIENDLY_NOTE, result);
      } else {
        return this.storage.set(FRIENDLY_NOTE, [{
          id: noteID,
          title: title,
          content: content
        }]);
      }
    });
  }

  removedSpecific(id) {
    this.storage.get(FRIENDLY_NOTE).then(res=> {
      var index = res.findIndex(obj=>obj.id==id);
      res.splice(index, 1);
      return this.storage.set(FRIENDLY_NOTE, res);
    });
  }
}
