const userName = document.getElementById("name") // создаем переменную для input name
const lastName = document.getElementById("last-name") // создаем переменную для input last-name
const userEmail = document.getElementById("email") // создаем переменную для input email
const listCatalog = document.getElementById("product") // создаем переменную для выбора товаров

document.getElementById('myForm').addEventListener('submit', function(event) {   
// взята функция отправки формы с страницы
    if (userName.value == "" || lastName.value == "" || userEmail.value == "") {
    // проверка (если данные в строках ввода пустые то выполняются следующие условия)
        event.preventDefault(); //не допускаем перезагрузку страницы
        userName.style.borderColor = "red"; // смена цвета рамки у всех вводов на красный
        lastName.style.borderColor = "red"
        userEmail.style.borderColor = "red"
        listCatalog.style.borderColor = "red"
    } else {
        userName.style.borderColor = "green"; // если же данные введены, смена цвета рамки на зеленый
        lastName.style.borderColor = "green"
        userEmail.style.borderColor = "green"
        listCatalog.style.borderColor = "green"
        alert('Заявка успешно отправлена!') // оповещение пользователя что данные отправлены
    }  
});
    
  