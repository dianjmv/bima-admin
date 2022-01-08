export function getLocalAuthToken() {
  return JSON.parse(localStorage.getItem('bima_security'));
}

export function setLocalAuthToken(authCredentials) {
  localStorage.setItem('bima_security', JSON.stringify(authCredentials));
}

export function removeLocalAuthToken() {
  localStorage.removeItem('bima_security');
}

export function create_UUID() {
  let dt = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
