/**
 * Approved photos (src/assets/photos) with their alt text, in one place so the
 * same photo always gets the same description. Never name a child here.
 */
import cleanUpDrive from '../assets/photos/clean-up-drive.jpg';
import independenceDayDiorama from '../assets/photos/independence-day-diorama.jpg';
import parentTeacherMeeting from '../assets/photos/parent-teacher-meeting.jpg';
import preschoolSunflowerCostume from '../assets/photos/preschool-sunflower-costume.jpg';
import scholarshipCertificates from '../assets/photos/scholarship-certificates.jpg';
import scienceFuseCertificates from '../assets/photos/science-fuse-certificates.jpg';
import sportsDayCheer from '../assets/photos/sports-day-cheer.jpg';
import studentsCelebratingCourtyard from '../assets/photos/students-celebrating-courtyard.jpg';

export const photos = {
  sportsDayCheer: {
    src: sportsDayCheer,
    alt: 'Students in navy tracksuits performing a cheer routine with pom-poms at the school sports gala',
  },
  studentsCelebratingCourtyard: {
    src: studentsCelebratingCourtyard,
    alt: 'A crowd of students cheering with their arms in the air in the school courtyard',
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
};
