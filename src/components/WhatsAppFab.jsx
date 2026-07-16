import whatsapp from "../assets_optimized/images/whatsaap.webp";

const WhatsAppFab = () => (
  <div className="fixed bottom-5 right-4 z-50">
    <a
      href="https://wa.me/+971549936911"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Clean Same Day on WhatsApp"
      className="block rounded-full shadow-2xl ring-4 ring-white/80 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={whatsapp}
        alt="Chat with Clean Same Day on WhatsApp"
        className="lg:w-20 lg:h-20 w-16 h-16 rounded-full"
      />
    </a>
  </div>
);

export default WhatsAppFab;
