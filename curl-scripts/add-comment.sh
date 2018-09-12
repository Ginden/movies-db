#!/usr/bin/env bash

curl -d "$(cat example-comment.json)" -H "Content-Type: application/json" -X POST http://localhost:8432/comments