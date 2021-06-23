# Задание
https://disk.yandex.ru/i/VRDSjabKCf3h2w

Создать страницу выдачи билетов с фильтрами как на макете.
## Задачи
1. Рендер билетов из файла tickets.json (/src/api/tickets.json) (#task1);
2. Фильтрация билетов в выдаче по количеству пересадок (#task2).

Также необходимо соблюсти следующие условия:
1. Использовать JS/TypeScript/CoffeeScript;
2. Обеспечить работоспособность в браузерах IE 11, Chrome;

## Развёртывание приложения
Для запуска локального сервера с данным приложением необходим менеджер пакетов yarn.

1. Клонирование git-репозитория на локальную машину:
```console
$ git clone https://github.com/seri0zha/tickets-filter.git
$ cd tickets-filter
```
2. Установка необходимых зависимостей:
```console
$ yarn install
```
3. Запуск локального сервера
```console
$ yarn start
```
Приложение доступно по адресу http://localhost:3000