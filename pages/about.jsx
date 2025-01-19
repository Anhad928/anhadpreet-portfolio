const AboutPage = () => {
    return (
      <>
        <h3>I am a Full Stack Software Developer and AI/ML enthusiast with a strong foundation in Python,
            Java, JavaScript, and TypeScript, complemented by hands-on experience with frameworks such as 
             Next.js, React and Spring Boot. My background includes leading Agile teams, implementing 
            secure authentication and database solutions, and optimizing complex workflows for improved 
            performance and usability. Leveraging my passion for machine learning, I’ve integrated AI-driven 
            features into applications—most notably in a resume builder platform—to deliver intelligent, user-
            centric experiences. I’m driven by a commitment to building scalable, innovative solutions that 
            blend robust back-end architecture with intuitive front-end interfaces, and I thrive in collaborative environments where I can contribute, learn, and keep pushing the boundaries of technology.</h3>
      </>
    );
  };
  
  export async function getStaticProps() {
    return {
      props: { title: 'About' },
    };
  }
  
  export default AboutPage;
  