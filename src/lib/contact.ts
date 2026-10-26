import site from '../data/site.json';

export type Phone = (typeof site.contact.phones)[number];

export const phones = site.contact.phones;

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
