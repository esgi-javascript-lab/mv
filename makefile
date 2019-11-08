.PHONY: build docker install

docker:
	docker-compose build --force-rm --pull --parallel

install:
	docker-compose run --rm npm install

build:
	docker-compose run --rm npm run build
