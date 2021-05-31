# Gulp 4. Версия с Pug, SCSS, webpack, eslint, stylelint и prettier

Стартовая сборка для Фронтенда c проверкой стилей кода

## Что включает в себя сборка?
### 1. Компиляторы
* [gulp-pug](https://www.npmjs.com/package/gulp-pug) — компиляция Pug в HTML;
* [gulp-sass](https://www.npmjs.com/package/gulp-sass) — компиляция SASS,SCSS в CSS;
### 2. Плагины для работы с CSS
* [gulp-autoprefixer](https://www.npmjs.com/package/gulp-autoprefixer) — автоматически расставляет вендорные префиксы в CSS в соответствии с сервисом [Can I Use](https://caniuse.com/);
* [gulp-shorthand](https://www.npmjs.com/package/gulp-shorthand) - удобный инструмент, который преобразует свойства CSS в сокращенные формы, делая их более короткими и удобочитаемыми. Пример работы:

```
a {
    font-family: Arial;
    font-style: italic;
    font-size: 14px;
    line-height: 18px; 
    font-weight: bold;
    background-image: url('example.png');
    background-color: red;
    background-size: cover;
    background-repeat: no-repeat;
}

=>

a {
  font: italic bold 14px/18px Arial;
  background: red url('example.png') no-repeat / cover;
}
```
* [gulp-clean-css](https://www.npmjs.com/package/gulp-clean-css) - минифицирует CSS, удаляя лишние пробелы и переводы строк
### 3. Плагины для работы с JS
* [webpack](https://webpack.js.org/) - сборщик модулей JavaScript
* [webpack-stream](https://www.npmjs.com/package/webpack-stream) - для интеграции webpack в gulp.
* [babel-loader](https://www.npmjs.com/package/babel-loader) - используется для преобразования конструкций, принятых в свежих версиях стандарта ECMAScript, в вид, понятный браузерам и другим средам
* [gulp-uglify-es](https://www.npmjs.com/package/gulp-uglify-es) - минифицирует JS код
### 4. Плагины для работы с изображениями
* [gulp-svg-sprite](https://www.npmjs.com/package/gulp-svg-sprite) — создание svg спрайта;
* [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin) -  оптимизирует изображения, можно уменьшать их и сжимать
* [gulp-webp](https://www.npmjs.com/package/gulp-webp) - конвертирует изображения в формат WebP
### 5. Плагины для работы со шрифтами
* [gulp-ttf2woff](https://www.npmjs.com/package/gulp-ttf2woff) - конвертирует шрифт из ttf в woff формат
* [gulp-ttf2woff2](https://www.npmjs.com/package/gulp-ttf2woff2) - конвертирует шрифт из ttf в woff2 формат
### 6. Общие плагины
* [gulp-rename](https://www.npmjs.com/package/gulp-rename) — переименование файлов;
* [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) — создание карты sourcemap;
* [gulp-notify](https://www.npmjs.com/package/gulp-notify) — уведомление о событиях;
* [gulp-watch](https://www.npmjs.com/package/gulp-watch) — отслеживание изменений в файлах проекта;
* [browser-sync](https://browsersync.io/docs/gulp) — автообновление браузера;
### 7. Линтеры кода
* stylelint
* eslint 
* prettier
 

## Начало работы

* Устанавливаем пакеты из package.json: ```yarn install``` или  ```npm i```;
* Устанавливаем следующие расширения для vs code: ```EditorConfig for VS Code, ESLint, Prettier - Code formatter и stylelint```;
* Добавляем настройки для рабочей области в VS Code . ```vscode/settings.json:```;
```
{

    "scss.validate": false,
    "css.validate": false,
    "less.validate": false,
     "editor.codeActionsOnSave": {
       "source.fixAll.stylelint": true,
       "source.fixAll.eslint": true
    },
    "editor.formatOnSave": false,
}
```

## Скрипты
* ```yarn dev```: запускает сборку без оптимизации, разворачивает локальный сервер для автообновления браузера и следит за изменениями в файлах 
* ```yarn build```: проект собирается c оптимизацией в папке ```build```
* ```yarn lint```: проверка стиля кода в JS и SCSS файлах 
* ```yarn eslint``` : проверка стиля кода в JS файлах 
* ```yarn eslint:fix```: проверка стиля кода в JS файлах c исправлением ошибок
* ```yarn stylelint```  : проверка стиля кода в SCSS и CSS файлах 
* ```yarn stylelint:fix```: проверка стиля кода в SCSS и CSS файлах c исправлением ошибок

## Структура сборки
* Работа ведется в папке: ```src```;
*  ```src/``` в корне лежат все страницы проекта. Главная страница index.pug с подключенным шаблоном ```layout.pug```, контентная часть разбита на три инклюда ```header, content, footer``` все страницы проекта создаются по аналогии
*  ```src/layout.pug``` основной шаблон проекта
*  ```src/components/*``` директория контентой части проекта и повторяющихся блоков сайта (header, footer и т.д.). В папках с названием блока храняться js, pug и scss файлы, которые потом подключаются в main файлы
*  ```src/fonts/*``` директория c шрифтами в формате ttf
*  ```src/img/*``` директория c изображениями
*  ```src/js/*``` директория c бандлом JS файлов и стороних js библиотек
*  ```src/styles/*``` директория c главным файлом стилей. В common храняться файлы с глобальными стилями, щрифтами, переменными и бандлом миксин. В папке mixins храняться все миксины. 

***
