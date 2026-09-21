// Looping photo slideshow for the About page's Hobbies & Interests box.
// No build step, no dependencies: this runs as-is in the browser.
(function () {
  var photos = [
    { src: "photos/about/web/hike.jpeg", caption: "Emerald Lake hike." },
    { src: "photos/about/web/my_bike.jpeg", caption: "My fixed-gear bike I built two years ago." },
    { src: "photos/about/web/card_show.jpeg", caption: "Recent Denver card show with friends." },
    { src: "photos/about/web/csu_grad.jpeg", caption: "Colorado State University graduation." }
  ];

  var index = 0;
  var imageEl = document.getElementById("slideshow-image");
  var captionEl = document.getElementById("slideshow-caption");
  var prevBtn = document.getElementById("slideshow-prev");
  var nextBtn = document.getElementById("slideshow-next");

  if (!imageEl || !captionEl || !prevBtn || !nextBtn) {
    return;
  }

  function render() {
    var photo = photos[index];
    imageEl.src = photo.src;
    imageEl.alt = photo.caption;
    captionEl.textContent = photo.caption;
  }

  prevBtn.addEventListener("click", function () {
    index = (index - 1 + photos.length) % photos.length;
    render();
  });

  nextBtn.addEventListener("click", function () {
    index = (index + 1) % photos.length;
    render();
  });
})();
