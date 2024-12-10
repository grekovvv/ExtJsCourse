//start work:
//1. npm install
//2. node api.js 

const express = require('express');
//Эта строчка решает ваши проблемы с блокированием cors
const cors = require('cors'); // Подключаем модуль cors
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './uploads/'); // Указываем папку для хранения файлов
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Генерируем уникальное имя файла
    }
});

// Парсим данные из тела запроса
// Без этого вы будете получать пустой объект
app.use(bodyParser.urlencoded({ extended: true }))

const upload = multer({ storage: storage });

app.use(express.json());
// Разрешаем все CORS-запросы ко всем маршрутам
app.use(cors());

//Проверка пароля
app.post('/login', async (req, res) => {
    // Получаем данные из формы
    const { login, password } = req.body;
    if (password === '12345') {
       res.json({ success: true, message: `Добро пожаловать, ${login}` });
    } else {
       res.json({ success: false, message: 'Неправильный пароль или логин'});
    }
});

//Загрузка файла
app.post('/upload', upload.single('file'), (req, res) => {
  return res.json({ file: req.file.filename });
});

//Для теста
app.get('/', (req, res) => {
    res.send("Сервер работает!");
});

app.listen(3000, () => {
  console.log('Сервер запущен на http://localhost:3000');
});