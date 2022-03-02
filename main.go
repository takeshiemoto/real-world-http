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

	http.HandleFunc("/cookie", func(w http.ResponseWriter, r *http.Request) {
		responseDto := ResponseDto{
			Message: "OK",
		}

		j, _ := json.Marshal(responseDto)

		cookie := &http.Cookie{
			Name:    "cheep-cheep",
			Value:   "peep-peep",
			Expires: time.Time{},
			MaxAge:  20,
		}

		http.SetCookie(w, cookie)

		w.Header().Set("Content-Type", "application/json")

		fmt.Fprint(w, string(j))

	})

	http.ListenAndServe(":8080", nil)
}
