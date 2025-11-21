import ContactForm from "@/components/ContactForm";

const contact = () => {
  return (
    <div className="flex flex-col items-center mt-6">
      <h1 className="relative fabric-surface-light rounded-3xl p-4">Nous contacter</h1>
      <ContactForm />
    </div>
  );
};
export default contact;
