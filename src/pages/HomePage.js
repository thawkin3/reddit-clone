import React from 'react'
import { Subreadit } from '../components/Subreadit'
import { User } from '../components/User'
import './HomePage.css'

export const HomePage = () => (
  <div className="homePage">
    <p>
      Welcome to Readit, a community of bookworms discussing their favorite
      books! Find a subreadit to browse or a user to follow below.
    </p>
    <h2>Popular Subreadits</h2>
    <div className="subreaditsSection">
      <Subreadit
        isPreview
        title="1984"
        description="A dystopian social science fiction novel by English novelist George Orwell."
      />
      <Subreadit
        isPreview
        title="fahrenheit451"
        description="A future American society where books are outlawed and firemen burn any that are found."
      />
      <Subreadit
        isPreview
        title="thecatcherintherye"
        description="Holden Caulfield, an angry, depressed 16-year-old, lives in an unspecified institution in California after the end of World War II."
      />
    </div>
    <h2>Popular Users</h2>
    <div className="usersSection">
      <User isPreview postCount={10} commentCount={15} userName="JohnDoe" />
      <User isPreview postCount={20} commentCount={25} userName="JaneDoe" />
      <User isPreview postCount={30} commentCount={35} userName="MattSmith" />
    </div>
  </div>
)
