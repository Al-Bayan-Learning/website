import site from '../data/site.json';

/** A number as stored in site.json: `display` for people, `tel` in +92 form. */
export type Phone = { display: string; tel: string; whatsapp?: boolean };

export const phones: Phone[] = site.contact.phones;

/** The education team's numbers: WhatsApp only, no calls. */
export const educationWhatsapp: Phone[] = site.contact.educationWhatsapp;

export const telHref = (phone: Phone) => `tel:${phone.tel}`;

/** wa.me link for a phone that's on WhatsApp (digits only, with country code). */
export const whatsappHref = (phone: Phone) => `https://wa.me/${phone.tel.replace(/\D/g, '')}`;

const { lat, lng } = site.contact.map;

/** Google Maps links for the campus pin (coordinates, not a listing, so no old name shows). */
export const mapLinks = {
  open: `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
  embed: `https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`,
};
