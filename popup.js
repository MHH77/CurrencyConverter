document.addEventListener("DOMContentLoaded", function () {
    const amountInput = document.getElementById("amount");
    const conversionTypeSelect = document.getElementById("conversion-type");
    const convertButton = document.getElementById("convert");
    const resultParagraph = document.getElementById("result");
    const contactButton = document.getElementById("contact-button");


    function toWords(num) {
        const numbers = {
            0: '',
            1: 'یک',
            2: 'دو',
            3: 'سه',
            4: 'چهار',
            5: 'پنج',
            6: 'شش',
            7: 'هفت',
            8: 'هشت',
            9: 'نه',
            10: 'ده',
            11: 'یازده',
            12: 'دوازده',
            13: 'سیزده',
            14: 'چهارده',
            15: 'پانزده',
            16: 'شانزده',
            17: 'هفده',
            18: 'هجده',
            19: 'نوزده'
        };

        const tens = {
            20: 'بیست',
            30: 'سی',
            40: 'چهل',
            50: 'پنجاه',
            60: 'شصت',
            70: 'هفتاد',
            80: 'هشتاد',
            90: 'نود'
        };

        const hundreds = {
            100: 'صد',
            200: 'دویست',
            300: 'سیصد',
            400: 'چهارصد',
            500: 'پانصد',
            600: 'ششصد',
            700: 'هفتصد',
            800: 'هشتصد',
            900: 'نهصد'
        };

        let words = '';

        if (num >= 1000000000000) {
            words += toWords(Math.floor(num / 1000000000000)) + ' تریلیون';
            num %= 1000000000000;
            if (num > 0) words += ' و ';
        }
        if (num >= 1000000000) {
            words += toWords(Math.floor(num / 1000000000)) + ' میلیارد';
            num %= 1000000000;
            if (num > 0) words += ' و ';
        }
        if (num >= 1000000) {
            words += toWords(Math.floor(num / 1000000)) + ' میلیون';
            num %= 1000000;
            if (num > 0) words += ' و ';
        }
        if (num >= 1000) {
            words += toWords(Math.floor(num / 1000)) + ' هزار';
            num %= 1000;
            if (num > 0) words += ' و ';
        }
        if (num >= 100) {
            words += hundreds[Math.floor(num / 100) * 100];
            num %= 100;
            if (num > 0) words += ' و ';
        }
        if (num >= 20) {
            words += tens[Math.floor(num / 10) * 10];
            num %= 10;
            if (num > 0) words += ' و ';
        }
        if (num > 0) {
            words += numbers[num];
        }

        return words.trim();
    }

    convertButton.addEventListener("click", function () {
        const amount = parseFloat(amountInput.value);
        if (amount < 0) {
            alert("لطفاً یک عدد مثبت وارد کنید.");
            return;
        }

        const conversionType = conversionTypeSelect.value;

        if (conversionType === "rial-to-toman") {
            const toman = Math.floor(amount / 10);
            resultParagraph.innerText = `مبلغ ${toWords(Math.floor(amount))} ریال برابر است با ${toman.toLocaleString('fa-IR')} تومان`;
        } else if (conversionType === "toman-to-rial") {
            const rial = Math.floor(amount * 10);
            resultParagraph.innerText = `مبلغ ${toWords(Math.floor(amount))} تومان برابر است با ${rial.toLocaleString('fa-IR')} ریال`;
        }
    });

    amountInput.addEventListener("input", function () {
        const amount = parseFloat(amountInput.value);
        if (amount < 0) {
            alert("لطفاً یک عدد مثبت وارد کنید.");
            return;
        }

        const conversionType = conversionTypeSelect.value;

        if (conversionType === "rial-to-toman") {
            const toman = Math.floor(amount / 10);
            resultParagraph.innerText = `مبلغ ${toWords(Math.floor(amount))} ریال برابر است با ${toman.toLocaleString('fa-IR')} تومان`;
        } else if (conversionType === "toman-to-rial") {
            const rial = Math.floor(amount * 10);
            resultParagraph.innerText = `مبلغ ${toWords(Math.floor(amount))} تومان برابر است با ${rial.toLocaleString('fa-IR')} ریال`;
        }
    });

    contactButton.addEventListener("click", function () {
        alert(" آدرس ایمیل mesfandiari77@gmail.com ");
    });

});
