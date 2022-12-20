export default defineEventHandler((event) => {
  const dateOfBirth = new Date("2003-10-31");

  var timeSinceBirth = Date.now() - dateOfBirth.getTime();
  var age = Math.floor(timeSinceBirth / 31556736000);

  return {
    name: "???",
    nickname: "StylexTV",
    age,
    timeSinceBirth,
    dateOfBirth
  }
})
