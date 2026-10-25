import site from '../data/site.json';

export type Phone = (typeof site.contact.phones)[number];

export const phones = site.contact.phones;

export const telHref = (phone: Phone) => `tel:${phone.tel}`;

/** wa.me link for a phone that's on WhatsApp (digits only, with country code). */
export const whatsappHref = (phone: Phone) => `https://wa.me/${phone.tel.replace(/\D/g, '')}`;
