export const checkValidation = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
    password
  );
  if (!isEmailValid) return "Email is invalid";
  if (!isPasswordValid) return "Password is invalid";

  return null;
};
