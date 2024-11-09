export const checkValidData = (name, email, password) => {
  if (name) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm.test(name);
    if (!isNameValid) return "Name is not valid";
  }
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
  /*
At least 8 characters long ({8,}$)
At least one uppercase letter ((?=.*[A-Z]))
At least one lowercase letter ((?=.*[a-z]))
At least one digit ((?=.*\d))
At least one special character ((?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]))
*/
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);
  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};