// import { Injectable } from '@angular/core';
// import { Hero } from './shared/models/hero';

// @Injectable({
//   providedIn: 'root',
// })
// export class InMemoryDataService {
//   constructor() {}
//   createDb() {
//     const heroes = [
//       { id: 11, name: 'Dr Nice', rating: 2 },
//       { id: 12, name: 'Narco', rating: 4 },
//       { id: 13, name: 'Bombasto', rating: 4 },
//       { id: 14, name: 'Celeritas', rating: 1 },
//       { id: 15, name: 'Magneta', rating: 5 },
//       { id: 16, name: 'RubberMan', rating: 3 },
//       { id: 17, name: 'Dynama', rating: 5 },
//       { id: 18, name: 'Dr IQ', rating: 3 },
//       { id: 19, name: 'Magma', rating: 1 },
//       { id: 20, name: 'Tornado', rating: 2 },
//     ];
//     // id: string;
//     // emergency: string;
//     // location: string;
//     // date: Date;
//     // dangerLevel: number;
//     // assignedHero: Hero;
//     const crises = [
//       {
//         id: 1,
//         emergency: 'Giant ants attacking my city',
//         description:
//           'The ants are so big and they are eating us people alive, while they are just working like they usually are... PLZ SEND HELP IMMEDIATELY!!!!!!!!!!!!!!!!!',
//         location: 'Negotino',
//         dangerLevel: 25,
//         hero: { id: 20, name: 'Tornado', rating: 2 },
//       },
//       {
//         id: 2,
//         emergency: 'Giant ants attacking my city',
//         description:
//           'The ants are so big and they are eating us people alive, while they are just working like they usually are... PLZ SEND HELP IMMEDIATELY!!!!!!!!!!!!!!!!!',
//         location: 'Negotino',
//         dangerLevel: 50,
//         hero: { id: 20, name: 'Tornado', rating: 2 },
//       },
//       {
//         id: 3,
//         emergency: 'Giant ants attacking my city',
//         description:
//           'The ants are so big and they are eating us people alive, while they are just working like they usually are... PLZ SEND HELP IMMEDIATELY!!!!!!!!!!!!!!!!!',
//         location: 'Skopje',
//         dangerLevel: 100,
//         hero: { id: 20, name: 'Tornado', rating: 2 },
//       },
//     ];
//     return { heroes, crises };
//   }
//   genId(heroes: Hero[]): number {
//     return heroes.length > 0
//       ? Math.max(...heroes.map((hero) => hero.id)) + 1
//       : 10;
//   }
// }
