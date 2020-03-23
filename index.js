const isEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const isUsername = (name) => {
  // Username may only contain alphanumeric characters or single hyphens
  const re = /^[a-zA-Z0-9\-\_]+$/;
  return re.test(name);
}

const isPassword = (password) => {
  return password.length > 6;
}

module.exports = {
  isEmail,
  isUsername,
  isPassword,
}
