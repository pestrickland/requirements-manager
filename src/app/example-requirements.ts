import { Requirement } from './requirement';

export const REQUIREMENTS: Requirement[] = [
    { id: '1a', description: 'Store released without being commanded.', type: 'functional', phase: 'firing' },
    { id: '2a', description: 'Accidental but commanded release.', type: 'functional', phase: 'firing' },
    { id: '3a', description: 'Rocket motor explodes during carriage.', type: 'functional', phase: 'firing' },
    { id: '4a', description: 'Store fails during carriage.', type: 'functional', phase: 'firing' },
    { id: '5a', description: 'Store hits aircraft during release.', type: 'functional', phase: 'firing' },
    ];
