import { Mail, MapPin, Phone } from "lucide-react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-3 w-full bg-[#181818] bg-opacity-90 border-t border-[#2E2E2E] p-5 md:p-10 text-white">
      <div className="border-b border-[#2E2E2E] w-full flex flex-col md:flex-row md:justify-between gap-3">

        <div className="flex flex-col items-center md:items-start">
          <img className="h-8" src="/logo.png" alt="Logo" />
          <div className="flex gap-3 mt-3">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C]"
            >
              <InstagramIcon fontSize="medium" />
            </a>
            <a
              href="https://wa.me/593995623828"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366]"
            >
              <WhatsAppIcon fontSize="medium" />
            </a>
          </div>
        </div>


        <div className="flex-1 flex flex-col md:flex-row justify-end gap-4">
          <div className="flex gap-2 items-center">
            <Phone size={12} className="text-[#00FF7F]" />
            <h2 className="text-sm text-gray-100">+593 9956238228</h2>
          </div>
          <div className="flex gap-2 items-center">
            <Mail size={12} className="text-[#00FF7F]" />
            <h2 className="text-sm text-gray-100">Byte_click@gmail.com</h2>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin size={12} className="text-[#00FF7F]" />
            <h2 className="text-sm text-gray-100">Quito-Ecuador</h2>
          </div>
        </div>
      </div>


      <div className="flex justify-center w-full">
        <h3 className="text-xs text-gray-100">© 2024 . All rights reserved</h3>
      </div>
    </footer>
  );
}
