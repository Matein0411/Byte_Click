"use client";

const ChatButton = () => {
    const handleWhatsAppClick = () => {
      const phoneNumber = "593995623828"; 
      const message = "Hola, estoy interesado en tus servicios."; 
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      window.open(whatsappURL, "_blank");
    };
  
    return (
      <div
        className="fixed bottom-5 right-5 bg-green-500 text-white rounded-full flex items-center shadow-lg cursor-pointer p-4 hover:scale-110 transition-transform"
        onClick={handleWhatsAppClick}
      >
        <div className="mr-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp Icon"
            className="w-6 h-6"
          />
        </div>
        <span className="font-medium">Chatea conmigo</span>
      </div>
    );
  };
  
  export default ChatButton;
  