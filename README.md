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
Сначала ставил сервер на express, подключал grapiql интерфейс на сервер, потом понял что это все нужно делать именно на клиенте, чтобы можно было получившийся query использовать и отрисовывать компоненты с моделями.
Ещё process.env с вебпаком не хотел работать, вспомнил про dotenv-webpack
Столкнулся с проблемой отрисовки моделей. Пока не решил, разбираюсь как сделать так как на примере на скриншоте. Именно с точки зрения отображения модели.
Использовал приведенный код в test-case. Оно совершенно по другому стало отображать. В общем думаю ещё потыкать над этим.
![image](https://github.com/nodenwwsfww/render-model-object/assets/54706661/7dacd1a8-e734-4f94-bb38-fa2a2221fd9a)
![image](https://github.com/nodenwwsfww/render-model-object/assets/54706661/c450dc80-7de8-47ca-a077-4a5e5f1e8839)
