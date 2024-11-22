import React from 'react';
import Navbar from './compenents/NavBar';
import ProfileCard from './compenents/PortfolioCard';
import BlogCard from './compenents/BlogCard';
import FormValidation from './compenents/FormValidation';

function App() {
  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Main Content */}
      <main style={{ padding: '20px' }}>
        {/* Portfolio Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Portfolio</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            <ProfileCard
              name="Jane Doe"
              image="https://via.placeholder.com/100"
              description="A creative graphic designer."
            />
            <ProfileCard
              name="John Smith"
              image="https://via.placeholder.com/100"
              description="An innovative software developer."
            />
          </div>
        </section>

        {/* Blog Section */}
        <section style={{ marginBottom: '40px' }}>
          <h2>Latest Blogs</h2>
          <div style={{ display: 'flex', gap: '20px' }}>
            <BlogCard
              title="React Basics"
              description="Learn the basics of React.js for web development."
              image="https://via.placeholder.com/150"
            />
            <BlogCard
              title="CSS Tricks"
              description="Explore advanced CSS techniques for better styling."
              image="https://via.placeholder.com/150"
            />
          </div>
        </section>

        {/* Form Section */}
        <section>
          <h2>Contact Us</h2>
          <FormValidation />
        </section>
      </main>
    </div>
  );
}

export default App;
