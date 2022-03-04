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

	const AllowOrigin = "http://0.0.0.0:3000"

	http.HandleFunc("/api/v1/set-cookie", func(w http.ResponseWriter, r *http.Request) {

		cookie := &http.Cookie{
			Name:     "cheep-cheep",
			Value:    "peep-peep",
			Expires:  time.Time{},
			MaxAge:   20,
			SameSite: http.SameSiteNoneMode,
		}

		http.SetCookie(w, cookie)

		responseDto := ResponseDto{
			Message: "OK",
		}

		j, _ := json.Marshal(responseDto)

		// クロスオリジンでCookieを付与する場合は「*」ではだめ。リクエストのOriginを含む必要がある
		w.Header().Set("Access-Control-Allow-Origin", AllowOrigin)
		w.Header().Set("Access-Control-Allow-Credentials", "true")
		w.Header().Set("Content-Type", "application/json")

		fmt.Fprint(w, string(j))
	})

	http.HandleFunc("/api/v1/read-cookies", func(w http.ResponseWriter, r *http.Request) {

		fmt.Println(r.Cookies())

		w.Header().Set("Access-Control-Allow-Origin", AllowOrigin)
		w.Header().Set("Access-Control-Allow-Credentials", "true")

		fmt.Fprint(w)
	})

	http.ListenAndServe(":8000", nil)
}
