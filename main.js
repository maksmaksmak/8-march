const button = document.getElementById('create-compliment')
const compliment = document.getElementById('compliment')
let count = 0


button.onclick = showCompliment

// button.addEventListener('click', (e) => {
//   e.preventDefault()
//   const randomIndex = Math.floor(Math.random() * compliments.length);
//   compliment.innerHTML = compliments[randomIndex];
// })

const compliments = [
  'Прекрасная и сильная',
  'Оказываешь поддержку',
  'Нежна ко мне',
  'и твоя любовь искринняя',
  'Вдохновляющая',
  'Умная и мудрая',
  'Очаровательная и нежная',
  'мой ангел-хранитель',
  'Сияющая счастливая звезда',
  'Лучшая мама в мире',
];



function showCompliment() {
  // console.log(count)
  count++
  console.log(compliments[count])
  if(count == 9) count = 0
  compliment.innerText = compliments[count]
}


// const compliments = [
//   'Ты умный и талантливый человек!',
//   'Твои идеи всегда вдохновляют меня!',
//   'Ты очень креативный человек!',
//   'Твои достижения всегда впечатляют меня!',
//   'Ты очень мотивированный и целеустремлённый человек!',
//   'Ты умеешь находить решения даже в самых сложных ситуациях!',
//   'У тебя такой замечательный чувство юмора!',
//   'Ты очень добрый и отзывчивый человек!',
//   'Ты такой прекрасный мужчина, я так рада, что ты есть в моей жизни!',
//   'Ты очень талантливый и креативный человек!',
//   'Ты такой сильный и уверенный в себе!',
//   'Ты прикольный',
//   'Ты клевый',
//   'Ты вкусный пирожок',
//   'Мне нравятся твои шутки',
//   'Твоя улыбка - топ',
//   'Твоя улыбка сводит с ума',
//   'Твои глаза волшебны',
//   'Мир без тебя скучноватый',
//   'Люблю с тобой гулять',
// ];