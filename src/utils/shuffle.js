/** Fisher-Yates shuffle */
export default function shuffle(array) {
  let tmp = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i * 1));
    [tmp[i], tmp[j]] = [tmp[j], tmp[i]];
  }
  return tmp;
}
