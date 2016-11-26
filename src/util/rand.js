export default function rand(min, max) {
  return Math.floor(Math.random() * (min-max) - min);
}
