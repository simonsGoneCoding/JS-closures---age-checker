const user = (name = "", age) => {
  let userName = name;
  let userAge = age;

  function showName() {
    console.log(`Hi ${userName}, ${userAge>18 ? `you're allowed to buy a beer ` : `you're under legal age, sorry`}`)
  }
  return showName
}

const ageChecker = user('Mike', 17)
ageChecker()