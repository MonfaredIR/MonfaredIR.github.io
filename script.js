console.log("Monfared Poetry Site Loaded");

// آینده‌دارش می‌کنیم: برای جستجو و مدیریت شعرها

const poems = [
  {
    title: "نمونه شعر ۱",
    text: "اینجا متن شعر قرار می‌گیرد..."
  },
  {
    title: "نمونه شعر ۲",
    text: "اینجا متن شعر قرار می‌گیرد..."
  },
  {
    title: "نمونه شعر ۳",
    text: "اینجا متن شعر قرار می‌گیرد..."
  }
];

// این فقط پایه است برای مرحله بعد (جستجو واقعی)

function searchPoems(query) {
  return poems.filter(p =>
    p.title.includes(query) || p.text.includes(query)
  );
}
