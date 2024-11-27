import React from 'react';
import NavBar from './compenents/NavBar';
import ProfileCard from './compenents/PortfolioCard';
import BlogCard from './compenents/BlogCard';
import FormValidation from './compenents/FormValidation';
import Footer from './compenents/Footer';
import './global.css'

function App() {
  const [activeTab, setActiveTab] = React.useState('ProfileCard');

  const renderSection = () => {
    switch (activeTab) {
      case 'ProfileCard':
        return (
          <ProfileCard
            name="Iron Man"
            image="/4196b5b4bd0799b7ecdcd233c1697402.jpg"
            description="The genius and kind-hearted billionaire of the USA, known for his brilliance in technology and leadership. The only way to become like Iron man is to work hard, write a lot of code, build an AI and die at the end."
          />
        );
      case 'BlogCard':
        return (
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            <BlogCard
              title="I am Iron Man"
              description="Iron Man is a superhero character of Marvel Studios. A rich and genius person who loves coding."
              image="/ironman2.jpg"
            />
            <BlogCard
              title="Why is he a Genius?"
              description="He studies, performs experiments, and writes code extensively."
              image="/196919-800-1067.jpeg"
            />
          </div>
        );
      case 'FormValidation':
        return <FormValidation />;
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <NavBar setActiveTab={setActiveTab} />
      <main className="content">{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;

