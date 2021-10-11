import { Component, OnInit, VERSION } from '@angular/core';
import { HeroService } from './hero.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
// i = ['s/es,v2','am+v1+ing','do+v1+s/es','have+v3','did+v1','was+ing','had+v3']
// you=['s/es,v2','do+v1+s/es','are+v1+ing','have+v3','did+v1','were+ing','had+v3']
// he =['s/es,v2','does+v1+s/es','is+v1+ing','has+v3','did+v1','was+ing','had+v3']
// she=['s/es,v2','does+v1+s/es','is+v1+ing','has+v3','did+v1','was+ing','had+v3']
// it=['s/es,v2','does+v1+s/es','is+v1+ing','has+v3','did+v1','was+ing','had+v3']
// we=['s/es,v2','do+v1+s/es','are+v1+ing','have+v3','did+v1','were+ing','had+v3']
// they=['s/es,v2','do+v1+s/es','are+v1+ing','have+v3','did+v1','were+ing','had+v3'] -->
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  range = 1;
  voices: any = window.speechSynthesis.getVoices();
  /* 
      Base_Form: 'stand',
      Past_Form: 'stood',
      Past_Participle_Form: 'stood',
      s_es_ies: 'stands',
      ing_form: 'standing',
       */
  tenseSel: any = {
    sub: {
      key: 'i',
      value: 'i',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            {
              key: 's_es_ies',
              value: 's_es_ies',
            },
            {
              key: 'Past_Form',
              value: 'Past_Form',
            },
          ],
        },
        {
          key: 'am',
          value: 'am+v1+ing',
          child: [
            {
              key: 'ing_form',
              value: 'ing_form',
            },
          ],
        },
        {
          key: 'do',
          value: 'do+v1+s/es',
          child: [
            {
              key: 's_es_ies',
              value: 's_es_ies',
            },
          ],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            {
              key: 'Past_Participle_Form',
              value: 'Past_Participle_Form',
            },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [
            {
              key: 'Base_Form',
              value: 'Base_Form',
            },
          ],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [
            {
              key: 'ing_form',
              value: 'ing_form',
            },
          ],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            {
              key: 'Past_Participle_Form',
              value: 'Past_Participle_Form',
            },
          ],
        },
      ],
    },
    help: {
      key: '',
      value: 's/es,v2',
      child: [
        {
          key: 's_es_ies',
          value: 's_es_ies',
        },
        {
          key: 'Past_Form',
          value: 'Past_Form',
        },
      ],
    },
    verb: {
      key: 'Past_Form',
      value: 'Past_Form',
    },
  };
  tense = [
    {
      key: 'i',
      value: 'i',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'am',
          value: 'am+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'do',
          value: 'do+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    {
      key: 'you',
      value: 'you',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'are',
          value: 'are+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'do',
          value: 'do+v1+s/es',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    // he =['s/es,v2','does+v1+s/es','is+v1+ing','has+v3','did+v1','was+ing','had+v3']
    {
      key: 'he',
      value: 'he',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'is',
          value: 'is+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'does',
          value: 'does+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    {
      key: 'she',
      value: 'she',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'is',
          value: 'is+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'does',
          value: 'does+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    {
      key: 'it',
      value: 'it',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'is',
          value: 'is+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'does',
          value: 'does+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    //// we=['s/es,v2','do+v1+s/es','are+v1+ing','have+v3','did+v1','were+ing','had+v3']
    {
      key: 'we',
      value: 'we',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'do',
          value: 'do+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'are',
          value: 'are+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },

        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
    {
      key: 'they',
      value: 'they',
      child: [
        {
          key: '',
          value: 's/es,v2',
          child: [
            { key: 's_es_ies', value: 's_es_ies' },
            { key: 'Past_Form', value: 'Past_Form' },
          ],
        },
        {
          key: 'do',
          value: 'do+v1+s/es',
          child: [{ key: 's_es_ies', value: 's_es_ies' }],
        },
        {
          key: 'are',
          value: 'are+v1+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },

        {
          key: 'have',
          value: 'have+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
        {
          key: 'did',
          value: 'did+v1',
          child: [{ key: 'Base_Form', value: 'Base_Form' }],
        },
        {
          key: 'was',
          value: 'was+ing',
          child: [{ key: 'ing_form', value: 'ing_form' }],
        },
        {
          key: 'had',
          value: 'had+v3',
          child: [
            { key: 'Past_Participle_Form', value: 'Past_Participle_Form' },
          ],
        },
      ],
    },
  ];
  setting: any = {
    sentSel: 'sent1',
    voiceId: 1,
    rate: 1,
    pitch: 10,
    msg: '',
    msg2: [''],
    sent: [
      'Base_Form',
      'Past_Form',
      'Past_Participle_Form',
      's_es_ies',
      'ing_form',
      'sent1',
      'sent2',
      'sent3',
      'sent4',
      'sent5',
    ],
    sub: ['I', 'you', 'he', 'she', 'it', 'they'],
    ten: [
      'am',
      'is',
      'are',
      'have',
      'has',
      'did',
      'was',
      'were',
      'had',
      'will',
    ],
  };

  message: any = new SpeechSynthesisUtterance(this.setting.msg);

  voiceId: any = '2';

  constructor(private hs: HeroService) {}
  create() {
    let that = this;
    console.log(this.tenseSel.sub.key);
    console.log(this.tenseSel.help.key);
    console.log(this.tenseSel.verb.key);
    this.setting.msg = this.hs.data
      .map((d: any) => {
        return (
          this.tenseSel.sub.key +
          ' ' +
          this.tenseSel.help.key +
          ' ' +
          d[this.tenseSel.verb.key]
        );
      })
      .join(', ');
    this.setting.msg2 = this.hs.data
      .map((d: any) => {
        return (
          this.tenseSel.sub.key +
          ' ' +
          this.tenseSel.help.key +
          ' ' +
          d[this.tenseSel.verb.key] +
          ' ' +
          d['sent1_mr']
        );
      })
      .join(', ');
    this.message = new SpeechSynthesisUtterance(this.setting.msg);
    console.log('dd=>', this.message);
  }
  sentSelChange(id: any) {
    console.log(id);
    this.setting.msg = this.hs.data
      .map((d: any) => {
        return d[id];
      })
      .join(', ');

    this.setting.msg2 = this.setting.msg;
    this.message = new SpeechSynthesisUtterance(this.setting.msg);
  }

  ngOnInit() {
    let t = this;
    t.create();
    setTimeout(() => {
      t.voices = window.speechSynthesis.getVoices();
    }, 1000);
  }
  rangeChange(range: any, id: any) {
    console.log(this.message, id, range);
    this.message[id] = range;
  }
  voiceChange(id: any) {
    console.log(this.voices, id);

    this.message.voice = this.voices[id];
  }
  play(id: any) {
    if (id == 'play') {
      window.speechSynthesis.speak(this.message);
    } else {
      let x: any = window.speechSynthesis;
      x[id]();
    }
  }
}
