export const getIDFromName = (name) => {
  let lowerCaseVersion = "";

  name.split("").forEach((letter, index, array) => {
    if (letter === " ") {
      if (index === 0 || index === array.length - 1) {
        letter = "";
      } else {
        letter = "-";
      }
    }
    const newLetter = letter.toLowerCase();
    lowerCaseVersion += newLetter;
  });
  return lowerCaseVersion;
};
