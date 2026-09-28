// =====================================================
// LẤY CÁC NÚT ĐIỀU HƯỚNG
// =====================================================

const buttons = document.querySelectorAll("[data-target]");
const navButtons = document.querySelectorAll(".nav-btn");

// =====================================================
// KHI BẤM NÚT
// =====================================================
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const targetId = button.getAttribute("data-target");
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

        if (button.classList.contains("nav-btn")) {
            navButtons.forEach(function(nav) {
                nav.classList.remove("active");
            });
            button.classList.add("active");
        }
    });
});

// =====================================================
// TỰ ĐỘNG ĐỔI NÚT MENU KHI CUỘN TRANG
// =====================================================
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", function() {
    let currentSection = "";

    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 160;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navButtons.forEach(function(button) {
        button.classList.remove("active");

        if (button.getAttribute("data-target") === currentSection) {
            button.classList.add("active");
        }
    });
});

// =====================================================
// HIỆU ỨNG XUẤT HIỆN KHI CUỘN
// =====================================================
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealItems.forEach(function(item) {
    revealObserver.observe(item);
});

// =====================================================
// FORM LIÊN HỆ
// =====================================================
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        alert("🎉 Cảm ơn " + name + "! Tin nhắn của bạn đã được gửi.");
        contactForm.reset();
    });
}

// =====================================================
// NÚT XEM DỰ ÁN
// =====================================================
const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        alert("🚀 Vào dự án.");
    });
});
