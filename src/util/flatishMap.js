export default function flatishMap(ary, cb) {
  if (Array.isArray(ary)) {
    return ary.map(cb);
  } else {
    return cb(ary);
  }
}
