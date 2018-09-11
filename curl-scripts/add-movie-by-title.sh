#!/usr/bin/env bash

curl -d '{"title": "Back to the Future"}' -H "Content-Type: application/json" -X POST http://localhost:8432/movies