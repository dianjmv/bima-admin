export function getLocalAuthToken() {
  return JSON.parse(localStorage.getItem('bima_security'));
}

export function setLocalAuthToken(authCredentials) {
  localStorage.setItem('bima_security', JSON.stringify(authCredentials));
}

export function removeLocalAuthToken() {
    localStorage.removeItem('bima_security')
}