import { Hazard } from './hazard';

export const HAZARDS: Hazard[] = [
    { id: 1, title: 'Uncommanded release', description: 'Store released without being commanded.' },
    { id: 2, title: 'Unintended release', description: 'Accidental but commanded release.' },
    { id: 3, title: 'Rocket motor explodes', description: 'Rocket motor explodes during carriage.' },
    { id: 4, title: 'Structural failure', description: 'Store fails during carriage.' },
    { id: 5, title: 'Store recontacts aircraft', description: 'Store hits aircraft during release.' },
    ];
