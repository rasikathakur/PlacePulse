import React, { useEffect } from 'react';

const App = () => {
  // Elements
  useEffect(() => {
    const toggleThemeBtn = document.querySelector('.header__theme-button');
    const storiesContent = document.querySelector('.stories__content');
    const storiesLeftButton = document.querySelector('.stories__left-button');
    const storiesRightButton = document.querySelector('.stories__right-button');
    const posts = document.querySelectorAll('.post');
    const postsContent = document.querySelectorAll('.post__content');

    // Set initial theme from LocalStorage
    const setInitialTheme = (themeKey) => {
      if (themeKey === 'dark') {
        document.documentElement.classList.add('darkTheme');
      } else {
        document.documentElement.classList.remove('darkTheme');
      }
    };

    document.onload = setInitialTheme(localStorage.getItem('theme'));

    // Toggle theme button
    toggleThemeBtn.addEventListener('click', () => {
      document.documentElement.classList.toggle('darkTheme');
      // Saving current theme on LocalStorage
      if (document.documentElement.classList.contains('darkTheme')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });

    // Rest of the code...

    return () => {
      // Cleanup code if necessary
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>PlacePulse</title>
        {/* Meta tags, links, and scripts */}
      </head>
      <body>
        <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
          {/* Navbar content */}
        </nav>

        <main className="main-container">
          <section className="content-container">
            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 20px' }}>
              {/* Rest of the content */}
            </div>
          </section>
        </main>

        <footer className="py-3 my-4">
          {/* Footer content */}
        </footer>
      </body>
    </html>
  );
};

export default App;
