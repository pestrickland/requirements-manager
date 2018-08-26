import { Requirement } from './requirement';

export const REQUIREMENTS: Requirement[] = [
    { id: 1, title: 'Uncommanded release', description: 'Store released without being commanded.', linkedCauses: ['one', 'two', 'three'] },
    { id: 2, title: 'Unintended release', description: 'Accidental but commanded release.', linkedCauses: ['one', 'two'] },
    { id: 3, title: 'Rocket motor explodes', description: 'Rocket motor explodes during carriage.', linkedCauses: ['two', 'three'] },
    { id: 4, title: 'Structural failure', description: 'Store fails during carriage.', linkedCauses: ['one', 'three'] },
    { id: 5, title: 'Store recontacts aircraft', description: 'Store hits aircraft during release.', linkedCauses: ['three'] },
    ];
