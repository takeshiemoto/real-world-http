package main

import (
	"fmt"
	"net/http"
)

func main() {

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		/* Cookie確認 */
		c, _ := r.Cookie("cheep-cheep")
		if c != nil {
			fmt.Println(c)
		}

		w.Header().Set("Access-Control-Allow-Origin", "*")

		fmt.Fprint(w, "Hello world")
	})

	http.ListenAndServe(":8082", nil)
}
