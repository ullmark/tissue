// This file automatically gets called first by SocketStream and must always exist

// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');
ss.server.on('ready', function(){
  // Wait for the DOM to finish loading
  jQuery(function(){
    // Load app
    require('/app');
  });
});
