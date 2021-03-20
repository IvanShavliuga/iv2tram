# vuemp3player

### v0.1.2
Проигрывание группы Машина времени
Тестовый дизайн
Все в одном файле
Отключение неправильно подключенных SCSS модулей
Чистка кода

### v0.1.3
Обновление логотипа
Разбиение на компоненты
Исправление пагинации

### v0.1.4 (develop)

## Формула подключения базового интерфейса
```
<audio id="player" src="sound.mp3"></audio>
<div>
	<button onclick="document.getElementById('player').play()">Воспроизведение</button>
	<button onclick="document.getElementById('player').pause()">Пауза</button>
	<button onclick="document.getElementById('player').volume+=0.1">Громкость +</button>
	<button onclick="document.getElementById('player').volume-=0.1">Громкость -</button>
</div>
```

<a href="https://proweb63.ru/help/js/html5-audio-js">API</a>

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```
