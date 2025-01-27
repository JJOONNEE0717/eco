// Define data
const tools = {
    tools: [
      "검",
      "활",
      "쇠뇌",
      "삼지창",
      "철퇴",
      "방패",
      "투구",
      "흉갑",
      "레깅스",
      "부츠",
      "겉날개",
      "곡괭이",
      "도끼",
      "삽",
      "괭이",
      "낚싯대",
      "가위",
      "부싯돌과_부시",
      "솔"
    ]
  }

const enchants = {
    내구성: {
      max_level: 3,
      price: 1,
      applications: [
        "검",
        "활",
        "쇠뇌",
        "삼지창",
        "철퇴",
        "방패",
        "투구",
        "흉갑",
        "레깅스",
        "부츠",
        "겉날개",
        "곡괭이",
        "도끼",
        "삽",
        "괭이",
        "낚싯대",
        "가위",
        "부싯돌과_부시",
        "솔"
      ]
    },
    수선: {
      max_level: 1,
      price: 3,
      applications: [
        "검",
        "활",
        "쇠뇌",
        "삼지창",
        "철퇴",
        "방패",
        "투구",
        "흉갑",
        "레깅스",
        "부츠",
        "겉날개",
        "곡괭이",
        "도끼",
        "삽",
        "괭이",
        "낚싯대",
        "가위",
        "부싯돌과_부시",
        "솔"
      ]
    },
    효율: {
      max_level: 5,
      price: 4,
      applications: [
        "곡괭이",
        "도끼",
        "삽",
        "괭이",
        "가위"
      ]
    },
    섬세한_손길: {
      max_level: 1,
      price: 1,
      applications: [
        "곡괭이",
        "도끼",
        "삽",
        "괭이",
        "가위"
      ]
    },
    행운: {
      max_level: 3,
      price: 3,
      applications: [
        "곡괭이",
        "도끼",
        "삽",
        "괭이"
      ]
    },
    바다의_행운: {
      max_level: 3,
      price: 2,
      applications: [
        "낚싯대"
      ]
    },
    미끼: {
      max_level: 3,
      price: 2,
      applications: [
        "낚싯대"
      ]
    },
    날카로움: {
      max_level: 5,
      price: 4,
      applications: [
        "검",
        "도끼"
      ]
    },
    강타: {
      max_level: 5,
      price: 4,
      applications: [
        "검",
        "도끼"
      ]
    },
    살충: {
      max_level: 5,
      price: 4,
      applications: [
        "검",
        "철퇴",
        "도끼"
      ]
    },
    밀치기: {
      max_level: 2,
      price: 1,
      applications: [
        "검"
      ]
    },
    발화: {
      max_level: 2,
      price: 2,
      applications: [
        "검",
        "철퇴"
      ]
    },
    휩쓸기: {
      max_level: 3,
      price: 2,
      applications: [
        "검"
      ]
    },
    약탈: {
      max_level: 3,
      price: 3,
      applications: [
        "검"
      ]
    },
    충성: {
      max_level: 3,
      price: 4,
      applications: [
        "삼지창"
      ]
    },
    찌르기: {
      max_level: 5,
      price: 2,
      applications: [
        "삼지창"
      ]
    },
    급류: {
      max_level: 3,
      price: 2,
      applications: [
        "삼지창"
      ]
    },
    집전: {
      max_level: 1,
      price: 2,
      applications: [
        "삼지창"
      ]
    },
    힘: {
      max_level: 5,
      price: 3,
      applications: [
        "활"
      ]
    },
    밀어내기: {
      max_level: 2,
      price: 2,
      applications: [
        "활"
      ]
    },
    화염: {
      max_level: 1,
      price: 2,
      applications: [
        "활"
      ]
    },
    무한: {
      max_level: 1,
      price: 2,
      applications: [
        "활"
      ]
    },
    빠른_장전: {
      max_level: 3,
      price: 3,
      applications: [
        "쇠뇌"
      ]
    },
    다중_발사: {
      max_level: 1,
      price: 3,
      applications: [
        "쇠뇌"
      ]
    },
    관통: {
      max_level: 4,
      price: 3,
      applications: [
        "쇠뇌"
      ]
    },
    육중: {
      max_level: 5,
      price: 5,
      applications: [
        "철퇴"
      ]
    },
    격파: {
      max_level: 4,
      price: 4,
      applications: [
        "철퇴"
      ]
    },
    보호: {
      max_level: 4,
      price: 3,
      applications: [
        "투구",
        "흉갑",
        "레깅스",
        "부츠"
      ]
    },
    화염으로부터_보호: {
      max_level: 4,
      price: 1,
      applications: [
        "투구",
        "흉갑",
        "레깅스",
        "부츠"
      ]
    },
    폭발로부터_보호: {
      max_level: 4,
      price: 1,
      applications: [
        "투구",
        "흉갑",
        "레깅스",
        "부츠"
      ]
    },
    발사체로부터_보호: {
      max_level: 4,
      price: 1,
      applications: [
        "투구",
        "흉갑",
        "레깅스",
        "부츠"
      ]
    },
    가시: {
      max_level: 3,
      price: 4,
      applications: [
        "투구",
        "흉갑",
        "레깅스",
        "부츠"
      ]
    },
    호흡: {
      max_level: 3,
      price: 2,
      applications: [
        "투구"
      ]
    },
    친수성: {
      max_level: 1,
      price: 2,
      applications: [
        "투구"
      ]
    },
    가벼운_착지: {
      max_level: 4,
      price: 3,
      applications: [
        "신발"
      ]
    },
    물갈퀴: {
      max_level: 3,
      price: 2,
      applications: [
        "신발"
      ]
    }
  }

// Functions
function updateSelectedTool(toolName) {
    selectedTool = toolName;

    const toolIcons = document.querySelectorAll('img.tool-icon');

    toolIcons.forEach((img) => {
        const tool = img.getAttribute('data-tool');
        
        if (tool === selectedTool) {
            img.style.backgroundColor = '#8C8D8E';
        } else {
            img.style.backgroundColor = '';
        }
    });

    const enchantContainer = document.getElementById("enchantContainer");
    enchantContainer.innerHTML = '';

    // 이름 바꾸기 서비스
    let enchantEdit = `<ul class="list-group">
        <li class="list-group-item d-flex justify-content-between align-items-center enchant-menu">
            <img class="item-icon" src="static/img/모루.webp" />
            <span class="fw-bold">이름 변경</span>
            <input type="text" class="form-control w-auto ms-3" id="name-input" placeholder="이름" maxlength="50">
        </li>
    </ul>
    <hr>`;
    enchantContainer.innerHTML += enchantEdit;

    // 사용 가능 인챈트
    Object.entries(enchants).forEach(([key, value]) => {
        if (value['applications'].includes(selectedTool)) {
            enchantEdit = `<ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center enchant-menu">
                    <img class="item-icon" src="static/img/인챈트북.webp" />
                    <span class="fw-bold">${key.replace(/_/g, " ")}</span>
                    <input type="number" class="form-control w-auto ms-3 number-input enchant-input" placeholder="0" min="0" max="${value['max_level']}" step="1" onkeydown="return false;" enchant="${key}" onchange="updateTotalPrice()">
                </li>
            </ul>`;
            enchantContainer.innerHTML += enchantEdit;
        }
    });

    updateTotalPrice()
}

function updateTotalPrice() {
    totalPrice = 0;

    const toolIcons = document.querySelectorAll('input.enchant-input');

    toolIcons.forEach((input) => {
        const enchant = input.getAttribute('enchant');
        const enchant_level = input.value;

        if (enchant_level > 0) {
          totalPrice += enchants[enchant]['price'];
        }
    });

    const originalPriceDisplay = document.getElementById("originalPriceDisplay");
    const finalPriceDisplay = document.getElementById("finalPriceDisplay");

    if (totalPrice > 5) {
      let discountedPrice  = Math.ceil(totalPrice / 2);

      originalPriceDisplay.innerText = `${totalPrice} 다이아몬드`;
      finalPriceDisplay.innerText = ` ${discountedPrice} 다이아몬드`;
    } else {
      originalPriceDisplay.innerText = '';
      finalPriceDisplay.innerText = ` ${totalPrice} 다이아몬드`;
    }
}

// Init
let totalPrice = 0;

let selectedTool = tools['tools'][0];
const toolContainer = document.getElementById("toolContainer");

tools['tools'].forEach(tool => {
    let toolSrc = `./static/img/${tool}.png`;
    let toolIcon = document.createElement('img');
    toolIcon.src = toolSrc;
    toolIcon.classList.add('img-thumbnail', 'tool-icon');
    toolIcon.setAttribute('data-tool', tool);
    toolIcon.onclick = () => updateSelectedTool(tool);

    toolContainer.appendChild(toolIcon);
});

// 결제
const paymentContainer = document.getElementById("paymentContainer");

let paymentEdit = `<ul class="list-group">
    <li class="list-group-item d-flex justify-content-between align-items-center enchant-menu">
        <img class="item-icon" src="static/img/다이아몬드.webp" />
        <span class="fw-bold">가격: <span id="originalPriceDisplay"></span><span id="finalPriceDisplay"></span></span>
    </li>
</ul>

<p class="text-start notification-message">
  ※ 5 다이아몬드부터 반값 할인이 적용됩니다.<br>
  ※ 장비 금액은 별도이며, 의뢰 시 장비를 제공해주셔야합니다.<br>
  ※ 인챈트 의뢰는 사정에 따라 거부될 수 있습니다.
</p>
`;

paymentContainer.innerHTML += paymentEdit;

updateSelectedTool(tools['tools'][0])