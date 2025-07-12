const quizData = [
  {
    question: "Bana attığın ilk mesajı hangi tarihte atmıştın?",
    options: [
      "23 Temmuz 2023",
      "24 Temmuz 2023",
      "25 Temmuz 2023",
      "26 Temmuz 2023",
    ],
    answer: "25 Temmuz 2023",
    message:
      "Evet 25 Temmuz 2023. Herşeyi başlatan o 'biliyorum şahsi hesabınız ama bişey sorabilir miyim' mesajı. Ben garip bi cevap verdiğimden şaşırmıştın. Soracağın şeyi sorman için yalvarmıştım sana. İlk yalvarışım buydu sanırım. ",
    image: "images/soru1.jpeg",
  },
  {
    question: "Peki soracağın şey neydi?",
    options: [
      "Yüz tanıma ile ilgili",
      "Senin canın mı sıkkın?",
      "Bana neden iyi akşamlar demedin?",
      "Hangi otobüsle geliyorsun?",
    ],
    answer: "Bana neden iyi akşamlar demedin?",
    message:
      "El sallamıştım iyi akşamlar anlamında ama haklısın iyi akşamlar demem gerekirdi. ",
    image: "images/soru2.jpeg",
  },
  {
    question:
      "Aşağıdakilerden hangisi çayıma şeker attığın gün gerçekleşmiştir?",
    options: [
      "İlk öpücük",
      "İlk seni seviyorum",
      "İlk kıskançlık",
      "İlk kavga",
    ],
    answer: "İlk öpücük",
    message:
      "O gün çayıma şeker attığında inanılmaz etkilenmiştim. Üstüne bi de öpücük gelince o istanbul uçağı boyunca bunları düşündüm.",
    image: "images/soru4.jpeg",
  },
  {
    question: "Aynı şeyi yazdığımız ilk mesaj neydi?",
    options: [
      "Seni seviyorum",
      "Hayır sen söyle",
      "Buluşalım gelince",
      "Denize düşme",
    ],
    answer: "Denize düşme",
    message: "O zamandan belliydi bu kadar uyumlu bir çift olacağımız.",
    image: "images/soru5.jpeg",
  },
  {
    question: "İlk buluştuğumuz gün hangi parkta yürüdük?",
    options: ["Seğmenler", "Kuğulu Park", "Kurtuluş", "Göksu"],
    answer: "Kurtuluş",
    message:
      "O gün beni beklediğin için çok teşekkürler. Seninle parkta otururken yürürken falan çok heyecanlı olduğumu hatırlıyorum. Bi de o kadar bekletmişim tabi elim ayağım birbirine girmişti :D",
    image: "images/soru6.jpeg",
  },
  {
    question: "Çıkma teklifimi nerde kabul ettin?",
    options: ["Argusto", "Arabica", "Colombia", "MacBear"],
    answer: "Arabica",
    message:
      "Seni etkilemek için Mişa'ya tasma almıştım. Senin yüzüğüne uysun diye gezmiştim baya. Siyah kalp vardı ikisinde de",
    image: "images/soru7.jpeg",
  },
  {
    question: "İlk beraber uyuduğumuz gün neydi peki?",
    options: ["3 Eylül 2023", "4 Eylül 2023", "5 Eylül 2023", "6 Eylül 2023"],
    answer: "4 Eylül 2023",
    message:
      "Çok güzel bi gündü. Akşam dışarı çıkmıştık. Sabah beraber uyanmak harika bi duygu gerçekten",
    image: "images/soru8.jpeg",
  },
  {
    question: "İlk ayımızı nerde kutladık?",
    options: ["Botanica", "Arabica", "Kuğulu park", "Madrid"],
    answer: "Botanica",
    message: "Hastayım ya çok seviyorum bu fotoğrafı. İlk ayımız kutlu olsun!",
    image: "images/soru9.jpeg",
  },
  {
    question: "Sinemada izlediğimiz ilk filmin baş harfi nedir",
    options: ["D", "A", "Ö", "K"],
    answer: "Ö",
    message: "Ölümlü Dünya 2 :)",
    image: "images/soru10.jpeg",
  },
  {
    question: "Peki İlk gittiğimiz konser?",
    options: ["Murda", "Tan", "Hadise", "Grup yorum"],
    answer: "Tan",
    message: "Aslında Murda ama aramızda anlaşmıştık aşkım Tan diye :D",
    image: "images/soru11.jpeg",
  },
  {
    question:
      "Aleyna,Yasin,Ekrem takımını Mehmet,Nisa,Beytullah takımı olarak bowlingte kaça kaç yendik?",
    options: ["152-102", "205-195", "198-155", "258-153"],
    answer: "258-153",
    message: "Bi tık daha iyiydik biz. (Bi tık :D)",
    image: "images/soru12.jpeg",
  },
  {
    question: "Aşağıdakilerden hangisini daha çok kıskanıyorum :D?",
    options: ["Levi", "Kakashi", "Dean Winchester", "Jason Statham"],
    answer: "Dean Winchester",
    message: "Çok açık bi cevap geçelim...",
    image: "images/soru12.webp",
  },
  {
    question: "Sana gönderdiğim ilk şarkı hangisiydi?",
    options: [
      "Bedo - Gelmelisin",
      "Akon - I can't wait",
      "Ezhel - Felaket",
      "Emmit Fenn - Painting Greys",
    ],
    answer: "Emmit Fenn - Painting Greys",
    message:
      "İstanbula giderken havaalanında atmıştım. Müzikle etkileme çalışmaları :)",
    image: "images/soru13.jpeg",
  },
  {
    question:
      "Telefonda kayıtlı isimlerimiz olan Bonnie ve Clyde nereden geliyor?",
    options: [
      "Bonnie&Clyde filmi",
      "Akon - I can't wait şarkısı",
      "Bir YouTube videosu",
      "Ted Lasso'dan bir replik",
    ],
    answer: "Akon - I can't wait şarkısı",
    message: "You're my Bonnie I'm your Clyde :)",
    image: "images/soru14.jpg",
  },
  {
    question:
      "Aquaparka gittiğimiz gün benimle beraber hangi biradan içmiştin?",
    options: ["Bomonti", "Efes Pilsen", "Carlsberg", "Heineken"],
    answer: "Carlsberg",
    message: "Sevmiyorum ama senin için içerim demiştin :)",
    image: "images/soru15.jpeg",
  },
  {
    question: "O çok beğendiğin ve 2 tane içtiğin kokteylin adı neydi?",
    options: ["Cin Fizz", "Meksika", "Cosmopolitan", "Whiskey Smash"],
    answer: "Cin Fizz",
    message: "Aşkım ben bunu her zaman içerim ya çok iyi bu :D",
    image: "images/soru16.jpeg",
  },
  {
    question:
      "Yenişehirde seni işten almaya geldiğimde kaçıncı banka oturuyorduk?",
    options: ["1", "2", "3", "4"],
    answer: "3",
    message: "Doluysa 2 ama genelde 3. banktı",
    image: "images/soru17.jpeg",
  },
];

let currentQuestion = 0;
let score = 0;

const documentBody = document.getElementById("documentBody");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const quizBox = document.getElementById("quiz-box");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const videoPlayer = document.getElementById("videoPlayer");

// Create image element
const imageEl = document.createElement("img");
imageEl.style.maxWidth = "100%";
imageEl.style.borderRadius = "12px";
imageEl.style.marginTop = "1rem";
imageEl.style.display = "none";
document.getElementById("quiz-box").appendChild(imageEl);

function showQuestion() {
  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;
  questionEl.style.display = "block";
  optionsEl.style.display = "block"; // 👈 ADD THIS LINE
  optionsEl.innerHTML = "";
  resultEl.textContent = "";
  imageEl.style.display = "none";
  nextBtn.style.display = "none";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = quizData[currentQuestion];

  if (selected === q.answer) {
    score++;

    // ✅ Hide the question and options
    questionEl.style.display = "none";
    optionsEl.style.display = "none"; // Hide options container

    // ✅ Show result message
    resultEl.textContent = "✅ " + q.message;

    // ✅ Show image
    imageEl.src = q.image;
    imageEl.style.display = "block";

    // ✅ Show Next button
    nextBtn.style.display = "block";
  } else {
    // ❌ Wrong answer – show message, keep buttons active
    resultEl.textContent = "❌ Hayır aşkım bi daha düşün :)";
  }
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
};

function showResult() {
  questionEl.textContent = "🎊 Quiz Completed!";
  optionsEl.innerHTML = "";
  optionsEl.style.display = "none";
  imageEl.style.display = "none";
  resultEl.innerHTML =
    `“Ve yolun sonuna geldiğimizde…”<br><br>

Bu küçük oyunun her sorusunda birlikte yaşadığımız anılar gizliydi.
Her cevabında yüzümde bir gülümseme belirdi, çünkü sen vardın...

Yanımda olduğun her an, dünyam daha güzel.
Ve ben bu dünyada, kalan her günü seninle yaşamak istiyorum.

Kusurlarınla, güzelliğinle, neşenle, hüzünlerinle...
Seni her hâlinle seviyorum.

Birlikte nice oyunlara, nice yıllara, nice hayallere…<br><br> Madem oyun anılarla ilgiliydi bi de şöyle bişey var` +
    (score === quizData.length
      ? "You're amazing! 💘 You remember everything!"
      : "");

  nextBtn.textContent = "Neymiş o şey?";
  nextBtn.onclick = () => showVideo();
  nextBtn.style.display = "block";

  // Show the memory slideshow
}

startBtn.onclick = () => {
  startScreen.style.display = "none";
  quizBox.style.display = "block";
  showQuestion();
};

function showVideo() {
  documentBody.style.padding = "0";
  quizBox.style.display = "none";
  videoPlayer.style.display = "block";
}
