const input1 = document.getElementById('input1'),
      input2 = document.getElementById('input2'),
      amount = document.getElementById('input3'),
      answer = document.getElementById('answer'),
      butt = document.getElementById('butt'),
      loading = document.getElementById('loading');

async function convert() {
    loading.style.cssText = 'animation-name: load; opacity: 1;';

    try {
        let fromCurrency = input1.value.trim().toUpperCase(),
            toCurrency = input2.value.trim().toUpperCase(),
            amountValue = parseFloat(amount.value.trim());

        if (!fromCurrency || !toCurrency || isNaN(amountValue) || amountValue <= 0) {
            answer.innerHTML = "❌ Please enter valid currency codes and amount!";
            loading.style.opacity = '0';
            return;
        }

        const options = { method: 'GET', headers: { accept: 'application/json' } },
              startTime = Date.now();

        const response = await fetch(
            `https://api.fastforex.io/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amountValue}&precision=10&api_key=bbd256e779-a10185afc8-stxtrb`,
            options
        );

        const data = await response.json(),
              endTime = Date.now(),
              delay = endTime - startTime;

        setTimeout(() => {
            loading.style.opacity = '0';

            if (data.result && data.result[toCurrency]) {
                const formattedAmount = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: toCurrency
                }).format(data.result[toCurrency]);

                answer.innerHTML = `✅Converted Amount:${formattedAmount}`;
            } else {
                answer.innerHTML = "⚠️ Conversion failed. Please check currency codes!";
            }

            answer.classList.add("fade-in");
            setTimeout(() => answer.classList.remove("fade-in"), 1500);

        }, delay);

    } catch (error) {
        console.error(error);
        answer.innerHTML = `❌ Error: ${error.message}`;
        loading.style.opacity = '0';
    }
}

butt.addEventListener('click', convert);
