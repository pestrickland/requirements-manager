import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDataService {
    createDb() {
        const requirements = [
        { id: 1, description: 'Store released without being commanded.', type: 'functional', phase: 'firing' },
        { id: 2, description: 'Accidental but commanded release.', type: 'functional', phase: 'firing' },
        { id: 3, description: 'Rocket motor explodes during carriage.', type: 'functional', phase: 'firing' },
        { id: 4, description: 'Store fails during carriage.', type: 'functional', phase: 'firing' },
        { id: 5, description: 'Store hits aircraft during release.', type: 'functional', phase: 'firing' },
        ];
        return {requirements};
    }
}
