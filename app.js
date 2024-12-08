const yapaySozcukler = {
  merhaba: ["Merhaba! Size nasıl yardımcı olabilirim?", "Selam!"],
  nasılsın: ["İyiyim, teşekkür ederim", "Gayet iyi, siz nasılsınız?"],
  "adın ne": ["Benim adım AİŞƏ", "Ben bir yapay zeka asistanıyım"],
  "js nedir ?": ["Ged Özün axtardaaa Qaqaşş"],
};

function gonderMesaj() {
  const userInput = document.getElementById("user-input");
  const chatMessages = document.getElementById("chat-messages");

  if (userInput.value.trim() === "") return;

  // Kullanıcı mesajını ekle
  chatMessages.innerHTML += `<div class="user-message">Siz: ${userInput.value}</div>`;

  // Basit yanıt mekanizması
  let yanit = yapaySozcukler[userInput.value.toLowerCase()] || [
    "Anlamadım. Başka bir şey söyler misiniz?",
  ];

  // Rastgele yanıt seç
  let secilenYanit = yanit[Math.floor(Math.random() * yanit.length)];

  // Yapay zeka yanıtını ekle
  chatMessages.innerHTML += `<div class="ai-message">AI: ${secilenYanit}</div>`;

  // Input'u temizle
  userInput.value = "";
}
