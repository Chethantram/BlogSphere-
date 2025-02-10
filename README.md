# BlogSphere

## Overview

BlogSphere is a dynamic blogging platform that allows users to read and share stories on various topics. Users can sign in to personalize their experience, and the site presents a categorized view of blogs, allowing for easy navigation through themes like Technology, Lifestyle, Health, and more.

## Features

User Authentication: Users can sign in or out using Clerk's authentication features.

Blog Categories: Navigate through multiple categories to explore specific interests.

Responsive Design: The application adjusts seamlessly to various screen sizes, providing an optimized reading experience.


## Setup Instructions

###  Prerequisites

Node.js

npm

Next.js framework

MonoDb

Clerk account for authentication

###  Installation

Clone the repository:

1 . git clone
```bash
https://github.com/Chethantram/BlogSphere-.git
```


2 . Install dependencies:
```bash
npm install
```


3 . Run the application:
```bash
npm run dev
```
4 . Open your browser and navigate to http://localhost:3000.

# Code Structure

## Components

Header:Displays the navigation bar, title, and user authentication buttons.

BlogList: Fetches and displays a list of blogs, categorized by user selection.

BlogItem: Represents an individual blog post with its title, description, and image.

Page: Displays the detailed view of a single blog, including the author's information and the full content.

## Backend Integration

The application fetches blog data from a backend API located at /api/blog. This API should return a JSON response with the blog details.

## Authentication

Utilizes Clerk's components for user authentication:

SignedIn and SignedOut components manage the rendering based on user authentication status.

SignInButton allows users to sign in, while UserButton offers account management features for signed-in users.

## Responsive Design

The application incorporates Tailwind CSS for styling, ensuring a mobile-friendly layout. Components are designed to resize and adapt based on screen size.

## Usage Example

To view all blogs, navigate to the main page of the application.

Use the category buttons within BlogList to filter blogs based on interests.

Click on any blog item to read more and access detailed information.

Users can authenticate using the sign-in button or log out to access a different experience.

