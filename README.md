Responsive Image Gallery

A simple and responsive Image Gallery Web Application developed using HTML5, CSS3, and JavaScript as part of my Web Development Internship Day 9 Task.

Project Description

This project displays multiple images in a responsive grid layout. Users can click on any image to view it in a larger preview using a lightbox. The preview can be closed using the close button, by clicking outside the image, or by pressing the Escape key.

Features
Responsive image gallery
8 images
CSS Grid layout
Clickable image preview
Lightbox modal
Close button
Close preview by clicking outside the image
Escape key support
Image hover effect
Responsive design for mobile, tablet, and desktop
Alt text for images
Technologies Used
HTML5
CSS3
JavaScript
Project Structure
Image-Gallery/
│
├── index.html
├── style.css
└── script.js
How It Works

The images are displayed using a CSS Grid layout. JavaScript selects all gallery images and adds click events to them.

When an image is clicked:

The selected image source is obtained.
The source is assigned to the preview image.
The modal is displayed.
The selected image appears in a larger view.

The modal can be closed using the close button, by clicking outside the image, or by pressing the Escape key.

Responsive Design

The gallery automatically adjusts according to screen size:

Desktop: 4 columns
Tablet: 3 columns
Mobile: 2 columns
Small screens: 1 column
JavaScript Concepts Practiced
DOM selection
querySelectorAll()
getElementById()
addEventListener()
Click events
Keyboard events
Conditional statements
Updating image attributes
Adding and removing CSS classes
CSS Concepts Practiced
CSS Grid
Responsive layouts
Media queries
Hover effects
Transitions
Modal positioning
object-fit
Flexbox
z-index
How to Run
Create a folder named Image-Gallery.
Add index.html, style.css, and script.js.
Open index.html in a web browser.
Click any image to open the larger preview.
Use the close button or press Escape to close the preview.
Learning Outcomes

Through this project, I practiced creating responsive layouts using CSS Grid, handling image click events with JavaScript, manipulating the DOM, creating a lightbox preview, and designing a responsive user interface.

Future Improvements
Add previous and next buttons
Add image captions
Add image categories
Add filtering functionality
Add image search
Add slideshow functionality
Add dark and light themes
Add image upload functionality# Task-9
