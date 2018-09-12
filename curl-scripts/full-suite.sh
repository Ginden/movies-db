#!/usr/bin/env bash

./add-movie-by-id.sh;
./add-movie-by-title.sh;
./add-comment.sh;
./add-comment.sh;

echo "Show movies";
curl http://localhost:8432/movies | jq;

echo "Show comments";
curl http://localhost:8432/comments | jq;