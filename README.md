## Development setup

Install required packages

```sh
$ npm install
```
Run only client react app locally in new terminal:

```sh
$ cd client
$ npm run start
```

```sh
Open http://localhost:3000/
```


С чем столкнулся?

Разбирался в пакетах, библиотеках которые понадобятся и пытался стыковать все это у себя в голове
Поэтому поэтапно разбирал разные моменты, а не делал все сразу
Сначала ставил сервер на express, подключал grapiql интерфейс на сервер, потом понял что это все нужно на клиенте, чтобы можно было получившийся query использовать и отрисовывать компоненты с моделями.
Ещё process.env с вебпаком не хотел работать, было весело, вспомнил про dotenv-webpack

