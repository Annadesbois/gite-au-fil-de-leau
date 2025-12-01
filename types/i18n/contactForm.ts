export type ContactFormMessages = {
  title: string;
  name: string;
  message: string;
  send: string;
  sending: string;
  success: string;
};

export type ContactFormProps = {
  formMessages: ContactFormMessages;
};
