import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fingerprint-angular';
  device: string | null = null;

  ngOnInit(): void {
    const _self = this;
    const script = document.createElement('script');
    script.src = 'http://localhost:3100/js/analytics.js';
    script.async = true;
    script.onload = function () {
      window.bayonet.analyze({
        jsKey: '123456789',
        onAnalyzedCallback: function (token: any) {;
          _self.device = token.token;
        },
      });
    };

    document.body.appendChild(script);
  }
}
