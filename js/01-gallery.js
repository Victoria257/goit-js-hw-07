import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryArr = document.querySelector(".gallery");


const images = galleryItems.map(({ preview, original, description }) =>
`<div class="gallery__item">
    <a class="gallery__link" href="${original}">   
        <img
        loading ="lazy"
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
  </a>
</div>`).join("")

galleryArr.insertAdjacentHTML('beforeend', images)

const handleClick = (event) => {   
 // прибираємо дію браузера за замовчуванням
    event.preventDefault();

    openAndCloseModal(event)
};

galleryArr.addEventListener("click", handleClick);

function openAndCloseModal(event) {
 if (!event.target.classList.contains("gallery__image")) return;
    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="100vw" height="100vh">`
        , {
		onShow: () => document.addEventListener("keydown", onEscapePress),
        onClose: () => document.removeEventListener("keydown", onEscapePress)
        }
    )
    instance.show()
    
    function onEscapePress(event) {
    if (event.code === "Escape") {
            console.log(`клавіша: escape`)
            instance.close()
        }
        else console.log(`jbjklnkn`);
      
    }
       
};



// Створення і рендер розмітки на підставі масиву даних galleryItems
//  і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого
// зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox.
//  Використовуй CDN сервіс jsdelivr і додай у проект посилання на
// мініфіковані(.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї.Для 
// цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента < img > в модальному вікні
//  перед відкриттям.Використовуй готову розмітку модального вікна із
//   зображенням з прикладів бібліотеки basicLightbox.
// Розмітка елемента галереї
// Посилання на оригінальне зображення повинно зберігатися в data - атрибуті 
// source на елементі < img >, і вказуватися в href посилання.
// Не додавай інші HTML теги або CSS класи, крім тих,
//     що містяться в цьому шаблоні.

// <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div>
// Зверни увагу на те, що зображення обгорнуте посиланням, отже по 
// кліку за замовчуванням користувач буде перенаправлений на іншу
// сторінку.Заборони цю поведінку за замовчуванням.

// Додай закриття модального вікна після натискання клавіші Escape.
//  Зроби так, щоб прослуховування клавіатури було тільки доти,
//     доки відкрите модальне вікно.Бібліотека basicLightbox містить
//      метод для програмного закриття модального вікна.