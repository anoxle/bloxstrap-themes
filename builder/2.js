window.initializeThemePage = function(options) {
  try {
    const themePage = new ThemePageGenerator(options);
    themePage.start_page_build();
  } catch (e) {
    console.error('An error occurred while initializing the theme page:', e);
    document.body.innerHTML = `<p style="color:red; font-family: sans-serif; text-align: center; padding-top: 50px;">A critical error occurred while building the page. Check the console for details.</p>`;
  }
};