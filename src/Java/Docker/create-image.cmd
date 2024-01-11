docker build --no-cache -f SQL\Dockerfile.PostgreSql -t stomatologicheskaya_klinika-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t stomatologicheskaya_klinika-java/app ../../..
