import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor (private settingsService : SettingsService){}

  onToggle(toggle : Toggle){
    this.settingsService.setBackground(toggle.checked);
  }
  checkAltBackground(){
    return this.settingsService.isAltBackground();
  }

}
