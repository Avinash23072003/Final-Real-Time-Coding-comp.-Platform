const bcrypt  = require("bcryptjs");

const hashPassword = async (password) => {
 try {
  const salt = await bcrypt.genSalt(12);
  return await bcrypt.hash(password, salt);
 } catch (error) {
  console.log("Error happened when hash password "+error);
 }
}


module.exports = {hashPassword};