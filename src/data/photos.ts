/**
 * Approved photos (src/assets/photos) with their alt text, in one place so the
 * same photo always gets the same description. Never name a child here.
 */
import competitionAwardStage from '../assets/photos/competition-award-stage.jpg';
import competitionMedalsConfetti from '../assets/photos/competition-medals-confetti.jpg';
import cleanUpDrive from '../assets/photos/clean-up-drive.jpg';
import firstClassroom2019 from '../assets/photos/first-classroom-2019.jpg';
import independenceDayDiorama from '../assets/photos/independence-day-diorama.jpg';
import parentTeacherMeeting from '../assets/photos/parent-teacher-meeting.jpg';
import preschoolSunflowerCostume from '../assets/photos/preschool-sunflower-costume.jpg';
import saturdayScholarsDentalHygiene from '../assets/photos/saturday-scholars-dental-hygiene.jpg';
import saturdayScholarsPresentation from '../assets/photos/saturday-scholars-presentation.jpg';
import scholarshipCertificates from '../assets/photos/scholarship-certificates.jpg';
import scienceFuseCertificates from '../assets/photos/science-fuse-certificates.jpg';
import sportsDayCheer from '../assets/photos/sports-day-cheer.jpg';
import studentsCourtyard2026 from '../assets/photos/students-courtyard-2026.jpg';
import summerCampMyFamily from '../assets/photos/summer-camp-my-family.jpg';

export const photos = {
  sportsDayCheer: {
    src: sportsDayCheer,
    alt: 'Students in navy tracksuits performing a cheer routine with pom-poms at the school sports gala',
  },
  studentsCourtyard2026: {
    src: studentsCourtyard2026,
    alt: 'Young students in school uniform and paper party hats, posing in two rows in the courtyard of the campus today',
  },
  independenceDayDiorama: {
    src: independenceDayDiorama,
    alt: 'A student-made model of the migration of 1947, with a train, houses, the Pakistan flag and portraits of the nation’s founders',
  },
  preschoolSunflowerCostume: {
    src: preschoolSunflowerCostume,
    alt: 'A smiling preschool student wearing a paper sunflower costume',
  },
  parentTeacherMeeting: {
    src: parentTeacherMeeting,
    alt: 'A teacher and a parent talking across a desk at a parent-teacher meeting',
  },
  scienceFuseCertificates: {
    src: scienceFuseCertificates,
    alt: 'Students holding Science Fuse certificates that read “You’re a great scientist!”, with two teachers behind them',
  },
  cleanUpDrive: {
    src: cleanUpDrive,
    alt: 'Students in masks and gloves with rubbish bags and a hand-drawn poster during a clean-up drive, with two teachers',
  },
  scholarshipCertificates: {
    src: scholarshipCertificates,
    alt: 'Three young students in school uniform, one holding a certificate of scholarship',
  },
  competitionMedalsConfetti: {
    src: competitionMedalsConfetti,
    alt: 'Students in navy blazers wearing medals, cheering as confetti falls around them',
  },
  competitionAwardStage: {
    src: competitionAwardStage,
    alt: 'A team of students in school uniform on stage at an inter-school competition, receiving an award',
  },
  saturdayScholarsDentalHygiene: {
    src: saturdayScholarsDentalHygiene,
    alt: 'A volunteer in a white coat showing a student how to brush teeth on a dental model',
    // Tall photo in wide frames: keep both faces (upper part) in view.
    position: 'center 25%',
  },
  saturdayScholarsPresentation: {
    src: saturdayScholarsPresentation,
    alt: 'Three students presenting a poster with a microphone, beside a volunteer',
  },
  summerCampMyFamily: {
    src: summerCampMyFamily,
    alt: 'Young students holding signs such as “Sister”, “Brother” and “Father” in front of a “My Family” display',
  },
  firstClassroom2019: {
    src: firstClassroom2019,
    alt: 'Children standing at their desks with a teacher in a small classroom with an arched window, in our first building',
  },
};
