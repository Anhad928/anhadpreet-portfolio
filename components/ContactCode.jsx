import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'anhadpre@ualberta.ca',
    href: 'mailto:anhadpre@ualberta.ca',
  },
  {
    social: 'github',
    link: 'Anhad928',
    href: 'https://github.com/Anhad928',
  },
  {
    social: 'linkedin',
    link: 'Anhadpreet Singh',
    href: 'https://www.linkedin.com/in/anhadpreet-singh/',
  },
  {
    social: 'instagram',
    link: 'anhadpreet996',
    href: 'https://www.instagram.com/anhadpreet996',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
