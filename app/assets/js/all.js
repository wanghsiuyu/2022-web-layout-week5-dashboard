$(function () {
  console.log('Hello Bootstrap5');
});
$(document).ready(function () {
  $('.reply-btn').click(function (e) {
    $('.reply').toggleClass('d-none');
    $('.editor').toggleClass('d-none');
    $('.link-reply-btn').toggleClass('d-none');
  });
});
$(document).ready(function () {
  $('.cancel-btn').click(function (e) {
    $('.reply').toggleClass('d-none');
    $('.editor').toggleClass('d-none');
    $('.link-reply-btn').toggleClass('d-none');
  });
});
$(document).ready(function () {
  $('.edit-btn').click(function (e) {
    $('.reply').toggleClass('d-none');
    $('.editor').toggleClass('d-none');
    $('.link-reply-btn').toggleClass('d-none');
  });
});
