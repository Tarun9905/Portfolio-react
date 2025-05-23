import React from 'react';

const SourceTwo = () => {
  const htmlCode = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <section class="wrapper">
        <div class="content">
            <h1 id="name">John Doe</h1>
            <h2 id="role">Web Developer</h2>

            <div class="section">
                <p><strong>Skills:</strong></p>
                <p id="skills">HTML, CSS, JavaScript, React</p>
            </div>

            <div class="section">
                <p><strong>Projects:</strong></p>
                <p id="projects">Portfolio Website, E-commerce Platform</p>
            </div>

            <div class="section">
                <p><strong>Experience:</strong></p>
                <p id="experience">3 years in front-end development</p>
            </div>

            <div class="section">
                <p><strong>Contact:</strong></p>
                <p id="email">johndoe@example.com</p>
                <p id="phone">+1234567890</p>
            </div>

            <div class="section">
                <p><strong>Links:</strong></p>
                <p><a id="linkedin" href="#" target="_blank">LinkedIn</a></p>
                <p><a id="github" href="#" target="_blank">GitHub</a></p>
            </div>
        </div>
    </section>
</body>
</html>`;
const css = `/* General styles */
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f5f7fa, #e6eff7);
  color: #333;
  text-align: center;
  margin: 0;
}

/* Heading styles */
h1 {
  font-size: 2.8rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #007acc;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 1.5rem;
}

/* Content container */
.content {
  width: 90%;
  max-width: 800px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.content:hover {
  transform: translateY(-5px);
}

/* Section styles */
.section {
  margin-bottom: 1.5rem;
  padding: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
  transition: background 0.3s, box-shadow 0.3s;
}

.section:hover {
  background: #eef6ff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
}

/* Paragraph styles */
p {
  font-size: 1.1rem;
  color: #444;
  margin: 0.5rem 0;
}

/* Link styles */
a {
  color: #007acc;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

a:hover {
  color: #005b99;
}

/* Responsive styles */
@media (max-width: 768px) {
  h1 {
    font-size: 2.2rem;
  }
  h2 {
    font-size: 1.5rem;
  }
  .content {
    padding: 1.5rem;
  }
  p {
    font-size: 1rem;
  }
}
`;

  return (
    <div>
      <h2>HTML Code :</h2>
      <pre style={{ background: '#222', color: '#0f0', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        {htmlCode}
      </pre>
      <h2>Css:</h2>
      <pre style={{ background: '#222', color: '#0f0', padding: '15px', borderRadius: '5px', overflowX: 'auto' }}>
        {css}
      </pre>
    </div>
  );
};

export default SourceTwo;
