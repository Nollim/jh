// Import the Bootstrap bundle
//
// This includes Popper and all of Bootstrap's JS plugins.

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { HomeCarousel } from "./home_carousel.js";


window.addEventListener('DOMContentLoaded', () => {
    let carousel = new HomeCarousel();
});
