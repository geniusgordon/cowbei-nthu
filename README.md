# cowbei-nthu

## Setup project

```sh
git clone git@github.com:geniusgordon/cowbei-nthu.git
cd cowbei-nthu
yarn # install server dependencies

cd client
yarn # install client dependencies
```

## Setup database info

export environment variable

```sh
export DB_NAME=cowbei_nthu
export DB_USERNAME=cowbei-nthu
export DB_PASSWORD=xxx
export DB_HOST=localhost
```

or use a `.env` file

```
DB_NAME=cowbei_nthu
DB_USERNAME=cowbei-nthu
DB_PASSWORD=aaaaa12345
DB_HOST=localhost
```

## Run in develop mode

```sh
yarn run start # start server & client together
```
## Run in production mode

```sh
cd client
yarn run build

cd ..
yarn run server
```

