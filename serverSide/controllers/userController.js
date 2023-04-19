const signIn = async (req, res) => {
  console.log("asdfkjsdf");
  res.send("<H1> hello sign In</h1>");
};

const signUp = async (req, res) => {
  return res.redirect("/user/sign-in");
};
export { signIn, signUp };
