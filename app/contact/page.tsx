import ContactForm from "@/components/ContactForm";

const contact = () => {
  return (
    <div className="flex flex-col items-center mt-6 gap-6">
      <h1 className="relative fabric-surface-light rounded-3xl p-4 contact-title">
        Contact et Accès
      </h1>
      <div className="relative fabric-surface-light w-full rounded-xl flex flex-col gap-6 md:gap-8 p-6 md:p-8 md:mb-6 max-w-212 shadow-sm">
        <div className="text-center">
          <p className="font-bold">Gîte Au fil de l'eau</p>
          <address>
            <p>14, rue de la mairie</p>
            <p>68470 STORCKENSOHN</p>
          </address>
        </div>
        <div className="rounded-2xl overflow-hidden shadow-sm aspect-3/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.906378861229!2d6.954999241742401!3d47.87773986933324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4793d2b0f98c87e7%3A0x4cb3fd1b66d971cf!2s14%20Rue%20de%20la%20Mairie%2C%2068470%20Storckensohn%2C%20France!5e1!3m2!1sen!2suk!4v1763732637154!5m2!1sen!2suk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation du Gîte Au fil de l'eau"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="text-center">
          <p className="font-bold mb-2">Infos et réservation</p>
          <p className="pb-2">Georgette TACQUARD</p>
          <address>
            <p>12, rue de la mairie</p>
            <p className="pb-2">68470 STORCKENSOHN</p>
            <p className="pb-2">
              Tel :{" "}
              <a href="tel:+33607961086">
                <span className="font-bold">
                  +33&nbsp;6&nbsp;07&nbsp;96&nbsp;10&nbsp;86
                </span>
              </a>
            </p>
            <p>
              Email :{" "}
              <a href="mailto:giteaufildeleau68&#64;gmail.com">
                <span className="font-bold">
                  giteaufildeleau68&#64;gmail.com
                </span>
              </a>
            </p>
          </address>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};
export default contact;
