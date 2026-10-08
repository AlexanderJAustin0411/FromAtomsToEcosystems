/* Exit ticket settings. Edit this one file; every exit ticket in this folder reads it.
   Keep this file in the SAME folder as the exit tickets on your GitHub site. */
window.EXIT_TICKET_CONFIG = {
  // Paste your Google Apps Script web app URL between the quotes (see the setup guide).
  // Leave it empty and students will be asked to download their results instead.
  SHEET_URL: "https://script.google.com/macros/s/AKfycbxogHjPorTs1pPPt8TCxY_WzG3FAlfsz2a8rt3yVt7_4N_Y62OjQmyiWtmSY6i07Kja/exec",

  // Teacher names students pick from. Leave the list empty [] to let students type it.
  TEACHERS: [Mr. Austin],

  // Period numbers students pick from.
  PERIODS: [1, 2, 3, 4, 5, 6, 7],

  // LOCKDOWN MODE
  // true  = full screen, and leaving the page (new tab, another app, exiting full screen) is caught and recorded.
  // false = turn lockdown off.
  LOCKDOWN: true,

  // The code YOU type to unlock a student's screen after they leave. Change it to your own.
  UNLOCK_CODE: "Austin",

  // true  = leaving locks the screen until you type the code.
  // false = leaving only shows a warning (it is still recorded).
  LOCK_ON_EXIT: true
};
