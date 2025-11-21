import ContactForm from "@/components/ContactForm";

const contact = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="relative fabric-surface-light rounded-3xl p-4">
        Contact et Accès
      </h1>
      <div>
        <p className="font-bold">Gîte Au fil de l'eau</p>
        <address>
          <p>14, rue de la mairie</p>
          <p>68470 STORCKENSOHN</p>
        </address>
      </div>

      <div>
        <p className="font-bold">Contact</p>
        <p>Georgette TACQUARD</p>
        <address>
          <p>12, rue de la mairie</p>
          <p>68470 STORCKENSOHN</p>
          <p>
            Tel :{" "}
            <a href="tel:+33607961086">
              +33&nbsp;6&nbsp;07&nbsp;96&nbsp;10&nbsp;86
            </a>
          </p>
          <p>
            Email :{" "}
            <a href="mailto:giteaufildeleau68@gmail.com">
              giteaufildeleau68@gmail.com
            </a>
          </p>
        </address>
      </div>
      <ContactForm />
    </div>
  );
};
export default contact;
