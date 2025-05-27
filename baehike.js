document.getElementById('year').textContent = new Date().getFullYear();

        // Intersection Observer for reveal animations
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: .15 });

        document.querySelectorAll('.card').forEach(card => observer.observe(card));

        // Smooth scroll for browsers that don't support native CSS smooth behavior
        document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
        const reviews = document.querySelectorAll(".review-card");
let index = 0;

function cycleReviews() {
  reviews[index].classList.remove("active");
  index = (index + 1) % reviews.length;
  reviews[index].classList.add("active");
}

setInterval(cycleReviews, 1000);

        function createReviewCard(review) {
            const card = document.createElement("div");
            card.classList.add("review-card");

            card.innerHTML = `
    <p>${review.message}</p>
    <div class="stars">${getStars(review.rating)}</div>
    <strong>- ${review.name}</strong>
  `;
            return card;
        }

        // Inject reviews
        reviews.forEach((review) => {
            const card = createReviewCard(review);
            reviewsContainer.appendChild(card);
        });
        const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});