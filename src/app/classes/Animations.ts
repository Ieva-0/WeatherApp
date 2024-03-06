import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter',
        [style({ opacity: 0 }), stagger('60ms', animate('600ms ease-out', style({ opacity: 1 })))],
        { optional: true }
      ),
      query(':leave',
        animate('200ms', style({ opacity: 0 })),
        { optional: true}
      )
    ])
  ]);
  
export class Animations {
    static listAnimation = listAnimation;
}
