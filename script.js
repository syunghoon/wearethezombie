let scrollNum = 0;

const imageAll = document.querySelectorAll(".imageWrap .parallaxImage");
const totalNum = imageAll.length;

imageAll.forEach((item, index) => {
  item.style.transform = `perspective(400px) translate3d(0,0,${
    150 + 1400 / (2 * (totalNum - index))
  }px)`;
});

let observer = new IntersectionObserver((sections) => {
  if (sections[0].isIntersecting) {
    window.addEventListener("scroll", () => {
      scrollNum = window.scrollY * 2 - 1400;
      if (scrollNum < 0) {
        imageAll.forEach((item, index) => {
          item.style.transform = `perspective(400px) translate3d(0,0,${
            150 - scrollNum / (2 * (totalNum - index))
          }px)`;
        });
      }
    });
  }
});

let sections = document.querySelectorAll("section");

sections.forEach((item) => {
  observer.observe(item);
});

let scrollY = window.scrollY;



window.addEventListener("scroll", () => {
let scrollY = window.scrollY;

  let bora3 = document.getElementById("bora3");
  let bora4 = document.getElementById("bora4");
  let dark = document.getElementById("darklight");
  let gallery = document.querySelector(".horizontal-scroll-wrapper");
  const imageAll = document.querySelectorAll(".finalImage");


  console.log(scrollY);

  if (scrollY > 730) {
    sections[0].style.backgroundColor = "rgb(0, 0, 0)";
    sections[1].style.backgroundColor = "rgb(0, 0, 0)";
    sections[2].style.backgroundColor = "rgb(0, 0, 0)";
  } else {
    sections[0].style.backgroundColor = "rgb(98, 69, 61)";
    sections[1].style.backgroundColor = "rgb(98, 69, 61)";
    sections[2].style.backgroundColor = "rgb(98, 69, 61)";
  }

  if (scrollY > 1200) {
    bora3.style.display = "block";
  } else {
    sections[1].style.opacity = 1;
  }

  if (cont.scrollTop < 1600) {
    sections[3].style.display = "none";
    sections[4].style.display = "none";
    sections[5].style.display = "none";
    sections[6].style.display = "none";
    sections[7].style.display = "none";
    sections[8].style.display = "none";
    sections[9].style.display = "none";
    scrolls[0].style.display = "none";
    scrolls[1].style.display = "none"; 
  } else {
    console.log("cont.scrollTop");
    sections[3].style.display = "block";
    sections[4].style.display = "block";
    sections[5].style.display = "block";
    scrolls[0].style.display = "block";

  }

  if (scrollY > 2800 && scrollY < 3600) {
    bora3.style.opacity = 1;
  } else {
    bora3.style.opacity = 0;
    bora4.style.opacity = 1;
  }
  
  if (scrollY > 3350) {
    bora3.style.transform = "rotate(-90deg)";
    bora4.style.display = "block";
  } else {
    bora3.style.transform = "rotate(0deg)";
    bora4.style.opacity = 0;
  }

  if (scrollY > 4000) {
    dark.style.opacity = 1;
    bora4.style.opacity = 0;
    bora3.style.display = "none";
  } else {
    dark.style.opacity = 0;
  }

  if (scrollY > 4700) {
    bora4.style.display = "none";
  }

  if (scrollY > 4700 && scrollY < 6600) {
    sections[5].style.position = "fixed";
    sections[6].style.display = "block";
  }

  if (scrollY > 6600 && scrollY < 7267) {
    sections[6].style.opacity = 1;
    mouseMove();
  }

  if (scrollY > 7300) {
    sections[6].style.display = "block";
  }

  if (scrollY > 8800) {
    const progress = (scrollY - 8800) / (9200 - 8800); // 스크롤 범위 내의 진행 상태 계산 (0 ~ 1)
    const backgroundColor = `rgb(${255 * progress}, ${255 * progress}, ${255 * progress})`; // 진행 상태에 따라 흰색으로 전환
    sections[7].style.backgroundColor = backgroundColor;
    sections[7].style.transition = "background-color 0.2s ease"; // 효과 추가

  } else {
    sections[7].style.backgroundColor = "rgb(0,0,0)";
  }

  if (scrollY > 9200) {
    sections[5].style.opacity = 0;
    sections[8].style.display = "block";
    setTimeout(() => {
      sections[8].style.opacity = 1;
      scrolls[1].style.display = "block";
      sections[9].style.display = "block";
    }, 500);
    
    scrollfinal();

  } else {
    sections[5].style.opacity = 1;
    sections[8].style.display = "none";
  }
});

let cont = document.querySelector(".container");
let layers = document.querySelectorAll(".layer");
let scrolls = document.querySelectorAll(".scroll");


cont.onscroll = () => {
  let x = cont.scrollTop;

  while (cont.scrollTop >= 1600) {
    console.log("cont.scrollTop!!");
    sections[3].style.display = "block";
    sections[4].style.display = "block";
    sections[5].style.display = "block";
    sections[6].style.display = "block";
    scrolls[0].style.display = "block";
    break; // 반복문 종료
  }

  layers[0].style.left = x / 1 + "px";
  layers[1].style.left = x / 1 + "px";
  layers[2].style.left = x / 1 + "px";
  layers[3].style.left = x / 2 + "px";
  layers[4].style.left = x / 3 + "px";
  layers[5].style.left = x / 5 + "px";
  layers[6].style.left = x / 12 + "px";
};

document.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY - 4000;
  const scrollThreshold = window.innerHeight * 2; // 200vh에 해당하는 값

  let scrollProgress = (scrollPosition / scrollThreshold) * 100;
  scrollProgress = Math.max(scrollProgress - 10, 0); // 시작 값으로부터 -30% 조정

  const circleSize = `${scrollProgress}%`;
  sections[5].style.clipPath = `circle(${circleSize} at left bottom)`;
});

function mouseMove() {
  let x = 0;
  let targetX = 0;
  const speed = 0.1;



  window.addEventListener("mousemove", (e) => {
    x = e.pageX - window.innerWidth / 2;
    clickMe.style.opacity = 1;
    cursorItem.style.opacity = 1;

    const cursorX = e.screenX;
    const cursorY = e.screenY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const leftRatio = (cursorX / windowWidth) * 100;
    const topRatio = (cursorY / windowHeight) * 100;
    cursorItem.style.left = `${leftRatio}%`;
    cursorItem.style.top = `${topRatio - 10}%`;

    clickMe.addEventListener("click", () => {
      clickPlant.style.pointerEvents = "auto";
      clickPlant.style.opacity = 1;
      plant.style.pointerEvents = "auto";
      plant.style.cursor = "pointer";
      plant.style.animation = "blink 1.5s infinite ease-in-out"; // blink 애니메이션 적용
      plant.addEventListener("click", () => {
        sections[7].style.display = "block";
        sections[7].scrollIntoView({ behavior: "smooth" });
      });
    });
  });

  const cursorItem = document.querySelector(".cursorItem");
  const circle = cursorItem.querySelector("img");
  const buttonAll = document.querySelectorAll(".button");

  buttonAll.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      circle.style.transform = "scale(.3)";
    });
    item.addEventListener("mouseleave", () => {
      circle.style.transform = "scale(1)";
    });
  });

  const contentAll = document.querySelectorAll(".contWrap img");
  const left = contentAll[0];
  const right = contentAll[1];
  const center = contentAll[2];
  const plant = contentAll[3];
  const clickMe = document.querySelector("#clickMe");
  const clickPlant = document.querySelector("#clickPlant");

  const loop = () => {
    targetX += (x - targetX) * speed;

    left.style.transform = `translateX(${targetX / 35}px)`;
    right.style.transform = `translateX(${targetX / 20}px)`;
    center.style.transform = `translateX(${-targetX / 20}px)`;
    plant.style.transform = `translateX(${-targetX / 50}px)`;
    window.requestAnimationFrame(loop);
  };

  loop();
}

function scrollfinal() {
  const imageAll = document.querySelectorAll(".finalImage");
  const totalNum = imageAll.length;
  const finalBubble = document.querySelectorAll(".final-bubble");

  window.addEventListener("scroll", () => {
    const scrollNum = window.scrollY - 9000;

    if (scrollNum > 0) {
      imageAll.forEach((item, index) => {
        const translateZValue = Math.max(
          0,
          500 - scrollNum / (2 * (totalNum - index))
        );
        item.style.transform = `perspective(400px) translate3d(0, 0, ${translateZValue}px)`;
      });
      console.log(scrollNum);
    }
    if (scrollNum > 2300) {
      finalBubble[1].style.opacity = 1;
    } else {
      finalBubble[1].style.opacity = 0;
    }
  });
}

// 버튼 클릭 시 이벤트 리스너 추가
document.getElementById('resetButton').addEventListener('click', function() {
  // 페이지 맨 위로 스크롤 이동
  window.scrollTo(0, 0);
  
  // 페이지 새로고침
  location.reload();
});