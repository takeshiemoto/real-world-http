export class CookieManager {
  static async set3erPartyCookie() {
    return fetch('http://localhost:8000/api/v1/set-cookie', {
      mode: 'cors',
      credentials: 'include',
    }).then((res) => res.json());
  }

  static async read3rdPartyCookies() {
    return fetch('http://localhost:8000/api/v1/read-cookies', {
      mode: 'cors',
      credentials: 'include',
    });
  }

  static async set1erPartyCookie() {
    return fetch('/api/set-cookie').then((res) => res.json());
  }

  static async read1stPartyCookies() {
    return fetch('/api/read-cookies');
  }
}
