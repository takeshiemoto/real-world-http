package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

type ResponseDto struct {
	Message string `json:"message"`
}

func main() {

	http.HandleFunc("/api/v1/set-cookie", func(w http.ResponseWriter, r *http.Request) {

		cookie := &http.Cookie{
			Name:    "cheep-cheep",
			Value:   "peep-peep",
			Expires: time.Time{},
			MaxAge:  20,
			//SameSite: http.SameSiteNoneMode,
		}

		http.SetCookie(w, cookie)

		responseDto := ResponseDto{
			Message: "OK",
		}

		j, _ := json.Marshal(responseDto)

		w.Header().Set("Content-Type", "application/json")
		fmt.Fprint(w, string(j))
	})

	http.HandleFunc("/api/v1/read-cookie", func(w http.ResponseWriter, r *http.Request) {

		/* Cookie確認 */
		c, _ := r.Cookie("cheep-cheep")
		if c != nil {
			fmt.Println(c)
		}

		fmt.Fprint(w)

	})

	http.ListenAndServe(":8081", nil)
}
