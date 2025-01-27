// Init
orderBtn = document.getElementById('order-btn')

async function fetchPublicIP() {
      try {
            const ipResponse = await fetch('https://api.ipify.org?format=json');
            const ipData = await ipResponse.json();
      } catch (error) {
            console.error('Error fetching public IP:');
      }
}

orderBtn.addEventListener('click', function() {
    // Init
    let orderTool = selectedTool;
    let orderNameChange = document.getElementById('name-input').value;
    let orderEnchants = '';
    let orderPrice = totalPrice;
    let orderPlayer = document.getElementById('customer-nickname-input').value;
    let orderSpecialNeed = document.getElementById('etc-needs').value;

    // Refine blank
    if (orderNameChange == '') {
        orderNameChange = '없음';
    }

    if (orderSpecialNeed == '') {
        orderSpecialNeed = '없음';
    }

    // Get data
    const toolIcons = document.querySelectorAll('input.enchant-input');

    toolIcons.forEach((input) => {
        const enchant = input.getAttribute('enchant');
        const enchant_level = input.value;

        if (enchant_level > 0) {
            orderEnchants += `${enchant} ${enchant_level}, `;
        }
    });

    const webhookURL = "https://discord.com/api/webhooks/1333256344354033704/5XnHPx7qwZbstmSUEgJjU1hK7N1Q2y2vyjUxVZ2uXBxkl9P-K3eDcUXisQ9gLCQoRFcP";

    const embed = {
        author: {
            name: "주문"
        },
        fields: [
            {
                name: "주문자 닉네임",
                value: orderPlayer
            },
            {
                name: "기타 요청사항",
                value: orderSpecialNeed
            },
            {
                name: "장비",
                value: orderTool,
                inline: true
            },
            {
                name: "인챈트",
                value: orderEnchants.slice(0, -2),
                inline: true
            },
            {
                name: "이름 변경",
                value: orderNameChange,
                inline: true
            },
            {
                name: "가격",
                value: `${orderPrice} 다이아몬드`
            },
            {
                name: "IP",
                value: `${ipData.ip}`
            }
        ],
        color: parseInt("e81224", 16)
    };

    const payload = {
        username: "주문봇",
        avatar_url: "",
        embeds: [embed]
    };

    fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            window.location.href = '/order_placed.html';
        } else {
            console.error("Error");
        }
    })
    .catch(error => {
        console.error("Error");
    });
})
