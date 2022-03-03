#!/bin/bash

yarn --cwd ./frontend install
cd backend || exit
go build