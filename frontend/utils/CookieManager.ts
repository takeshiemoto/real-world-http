export class CookieManager {
  static async setCookie() {
    return fetch("/api/v1/set-cookie")
      .then((res) => res.json())
      .catch((err) => {
        console.error(err);
      });
  }

  static async readCookie() {
    return fetch("/api/v1/read-cookie");
  }
}
