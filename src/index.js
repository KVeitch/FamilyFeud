
let round;
// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';
import './domUpdates';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

$('.inputs__reset').click(function() {
  location.reload()
})