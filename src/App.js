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
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ironstudios.com%2Fstatue-iron-man-ultimate---the-infinity-saga---art-scale-1-10---iron-studios-090214%2Fp&psig=AOvVaw3Lc9kG8OOZEWPN4VMH5uoH&ust=1732695462544000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCKjZuN7H-YkDFQAAAAAdAAAAABAE"
            description="The genius and kind-hearted billionaire of the USA, known for his brilliance in technology and leadership."
          />
        );
      case 'BlogCard':
        return (
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '20px' }}>
            <BlogCard
              title="I am Iron Man"
              description="Iron Man is a superhero character of Marvel Studios. A rich and genius person who loves coding."
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              title="Why is he a Genius?"
              description="He studies, performs experiments, and writes code extensively."
              image="https://via.placeholder.com/150"
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

