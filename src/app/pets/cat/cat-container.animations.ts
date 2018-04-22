import { animate, state, style, transition, trigger } from '@angular/animations';

export function transitionAnimation() {
    return trigger('transitionStatus', [
        state('off-screen', style(
            {
                transform: 'scale(0)'
            })
        ),
        transition('off-screen => *', animate('600ms ease-out'))
    ]);
}
