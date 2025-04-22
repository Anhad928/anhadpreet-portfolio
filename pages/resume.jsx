import styles from '../styles/ResumePage.module.css';

// Change the path as needed. If Resume.pdf is in the same folder as this file,
// you might use './Resume.pdf' or '../Resume.pdf'. If it's in the /public folder, use '/Resume.pdf'.
const myResume = './Resume-updated (1).pdf';

export default function ResumePage() {
  return (
    <center>
      <h3>
        Resume (
        <a
          href={myResume}
          className={styles.underline}
          download="Resume-AnhadpreetSingh.pdf"
        >
          Download
        </a>
        )
      </h3>
      <br />
      <div className={styles.pdfContainer}>
        {/* Use an iframe to display the PDF */}
        <iframe
          src={myResume}
          width="100%"
          height="800px"
          style={{ border: 'none' }}
          title="Resume PDF"
        />
      </div>
    </center>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Resume' },
  };
}
