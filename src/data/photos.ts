import type { ImageMetadata } from 'astro';

import p01 from '../assets/photos/launch-01.jpg';
import p02 from '../assets/photos/launch-02.jpg';
import p03 from '../assets/photos/launch-03.jpg';
import p04 from '../assets/photos/launch-04.jpg';
import p05 from '../assets/photos/launch-05.jpg';
import p06 from '../assets/photos/launch-06.jpg';
import p07 from '../assets/photos/launch-07.jpg';
import p08 from '../assets/photos/launch-08.jpg';
import p09 from '../assets/photos/launch-09.jpg';
import p10 from '../assets/photos/launch-10.jpg';
import p11 from '../assets/photos/launch-11.jpg';
import p12 from '../assets/photos/launch-12.jpg';
import p13 from '../assets/photos/launch-13.jpg';
import p14 from '../assets/photos/launch-14.jpg';
import p15 from '../assets/photos/launch-15.jpg';
import p16 from '../assets/photos/launch-16.jpg';
import p17 from '../assets/photos/launch-17.jpg';
import p18 from '../assets/photos/launch-18.jpg';
import p19 from '../assets/photos/launch-19.jpg';

export type Photo = { src: ImageMetadata; alt: string; caption?: string };

/** Photos from the launch on 15 November 2026, in the order they were posted. */
export const launchPhotos: Photo[] = [
  { src: p01, alt: 'A faculty member speaks at the lectern while a slide introduces the chief advisor', caption: 'Introducing the forum’s chief advisor' },
  { src: p02, alt: 'A speaker at the lectern with guests seated beside the projector screen', caption: 'Opening remarks' },
  { src: p03, alt: 'A speaker addresses the room from in front of the projector screen', caption: 'Talks from faculty members' },
  { src: p04, alt: 'A full lecture room of students listening to a speaker', caption: 'Room 120, full for the first session' },
  { src: p05, alt: 'A speaker presents a slide about the GRE', caption: 'A session on the GRE and higher study' },
  { src: p06, alt: 'A student receives a BSRF badge from a faculty member', caption: 'Handing out the first BSRF badges' },
  { src: p07, alt: 'A student receives a BSRF badge in front of the faculty panel', caption: 'Badges for the first members' },
  { src: p08, alt: 'A student receives a BSRF badge from the faculty panel', caption: 'Badges for the first members' },
  { src: p09, alt: 'Two students hold up a BSRF badge and smile', caption: 'New members' },
  { src: p10, alt: 'A cake decorated with the BSRF logo', caption: 'The launch cake, with the forum’s logo' },
  { src: p11, alt: 'Faculty and students gather around the table to cut the cake', caption: 'Cutting the cake together' },
  { src: p12, alt: 'Students and faculty crowd around the cake table', caption: 'Cutting the cake together' },
  { src: p13, alt: 'Faculty and students around the cake table', caption: 'Cutting the cake together' },
  { src: p14, alt: 'Faculty and students share cake around the table', caption: 'Celebrating the launch' },
  { src: p15, alt: 'Faculty and students around the table after the cake cutting', caption: 'Celebrating the launch' },
  { src: p16, alt: 'A wide view of students and faculty around the cake table', caption: 'Celebrating the launch' },
  { src: p17, alt: 'The faculty panel stands behind the table as a student receives a badge', caption: 'The faculty panel' },
  { src: p18, alt: 'A student receives a badge from the faculty panel', caption: 'Badges for the first members' },
  { src: p19, alt: 'Two students exchange a badge at the front of the room', caption: 'Closing the first session' },
];

/** Hand-picked order for the scrolling photo reel on the home page. */
export const reelPhotos: Photo[] = [3, 0, 4, 5, 9, 10, 16, 8].map((i) => launchPhotos[i]);
