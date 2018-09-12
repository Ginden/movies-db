# movies-db

Netguru recruitment task


# Building application

`docker-compose up -d`

This will build Docker image and spawn it in background, running on port 8432.

## Manual testing of application

`(cd curl-scripts && ./full-suite.sh)`

This requires `jq` tool for pretty JSON display. Edit scripts in `curl-scripts` folder to make them readable.

App is deployed to URL: https://fast-ocean-65679.herokuapp.com/