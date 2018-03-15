export function mediaUrl(slug, size) {
  return `https://cdn.checkd.media/images/${slug}-${size}.jpg`;
}

export function isServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
}
