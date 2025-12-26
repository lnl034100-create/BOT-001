// استدعاء المكتبات الأساسية
const { Client, LocalAuth } = require('whatsapp-web.js'); // مكتبة البوت
const qrcode = require('qrcode-terminal'); // لعرض QR على التيرمنال

// إنشاء العميل
const client = new Client({
    authStrategy: new LocalAuth(), // يحفظ الجلسة بحيث ما تحتاج QR كل مرة
});

// حدث عند توليد QR
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    console.log('مسح QR باستخدام واتساب على جوالك');
});

// حدث عند تشغيل البوت بنجاح
client.on('ready', () => {
    console.log('البوت جاهز ✅');
});

// حدث عند استقبال رسالة
client.on('message', async msg => {
    const chat = await msg.getChat();

    // أمر بسيط مثال: إذا كتب أحد "سلام" يرد البوت
    if (msg.body.toLowerCase() === 'سلام') {
        msg.reply('وعليكم السلام 👋');
    }

    // مثال لأمر الفعاليات: .نسخ
    if (msg.body.toLowerCase() === '.نسخ') {
        msg.reply('أهلاً بك! هذه فعالية النسخ.');
    }
});

// بدء تشغيل البوت
client.initialize();
