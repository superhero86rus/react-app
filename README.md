# Базовый курс по React на платформе Stepik

```bash
# Ранее собирали проект через create-react-app
# Сегодня, best practice это Vite

nvm alias default v18.20.5
nvm use default

npm create vite@latest
cd react-app
npm install
npm run dev
```

```txt
statefull - сохраняющее состояние
stateless - не имеет внутреннего состояния. Задается извне

Контекст - провайдер и консьюмер (потребитель)

Хуки:

useState - управление состоянием
useEffect - управление отображением

useReducer - управление состоянием, но с большими возможностями (цепочка состояний)
const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
Принимает:
    функцию состояния reducer(state, action) которая принимает состояние и объект действия
    начальное состояние INITIAL_STATE
Возвращает:
    текущее состояние
    функцию dispatch(actionObject), которая отправляет объект действия, например: actionObject - {type: 'CLEAR'}

useRef - позволяет привязаться к элементу, который мы выберем в качестве reference