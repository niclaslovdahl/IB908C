// Opens all links in new tab
$('a[href^="http://"], a[href^="https://"]').attr('target', '_blank');

// Creates menu from list using jQuery UI
$('.menu').menu();