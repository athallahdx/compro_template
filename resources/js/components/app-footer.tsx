import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react"
import type { Contact, Motto } from "@/types"

interface AppFooterProps {
  contact?: Contact | null
  motto?: Motto | null
}

export function AppFooter({ contact, motto }: AppFooterProps) {
  if (!contact) return null

  return (
    <footer className="bg-white border-t border-gray-200 text-gray-900 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">Contact Info</h3>
            <div className="space-y-3">
              {contact.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0" />
                  <span className="break-words">{contact.address}</span>
                </div>
              )}
              {contact.whatsapp && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500" />
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`}
                    className="hover:text-orange-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {contact.whatsapp}
                  </a>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-orange-500" />
                  <a href={`mailto:${contact.email}`} className="hover:text-orange-600 transition-colors">
                    {contact.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-gray-900">Follow Us</h3>
            <div className="flex items-center gap-3">
              {contact.instagram && (
                <a
                  href={contact.instagram}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Instagram"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
              )}
              {contact.facebook && (
                <a
                  href={contact.facebook}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow us on Facebook"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
              )}
              {contact.linkedin && (
                <a
                  href={contact.linkedin}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-300 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect with us on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              )}
            </div>
          </div>

          {/* Company Info */}
          {motto?.description && (
            <div className="lg:col-span-2">
              <h3 className="text-base font-semibold mb-4 text-gray-900">About Our Company</h3>
              <p className="text-gray-600 leading-relaxed">{motto.description}</p>
            </div>
          )}
        </div>

        <div className="border-t border-gray-200 mt-8 md:mt-10 pt-5 md:pt-6 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Coco Sugar Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
