export const validateEmail = (email: string) => {
  if (!email) return 'please enter the email';

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!regex.test(email)) return 'please enter a valid email';

  return '';
};
