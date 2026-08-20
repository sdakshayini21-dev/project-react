import "./Footer.css";

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">

      <p>
        &copy; {year} Dakshayini.S. All rights reserved.
      </p>

      <nav aria-label="Social links">

        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

      </nav>

    </footer>
  );
}

export default Footer;