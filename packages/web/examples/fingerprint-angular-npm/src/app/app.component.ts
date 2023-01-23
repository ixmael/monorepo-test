import { Component,  OnInit } from '@angular/core';

import bayonet from '@bayonetio/fingerprint';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fingerprint-angular-npm';
  device: string | null = null;

  ngOnInit(): void {
    const _self = this;
    bayonet.analyze({
      jsKey: '123456789',
      onAnalyzedCallback: function (token: any) {;
        _self.device = token.token;
      },
    });
  }
}
