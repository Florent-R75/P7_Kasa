# Front-End Developer Training

## P7-Kasa

Project #7 of the OPENCLASSROOMS Web Developer training program

### Context:

Kasa has been in the business of apartment rentals between individuals for nearly 10 years. The company aims to completely redesign its website.

### Objectives:

Develop the entire application and its components using React, following the provided Figma mockups. Reusable components need to be created for the opening tabs and the photo carousel.

### Back-end / Data:

Here is this JSON file to build the corresponding Front-End.

### Functional Specifications:

Some clarifications on the site's features:

1. For scrolling through photos in the gallery (Gallery component):
   *If the user is on the first image and clicks "Previous Image," the gallery displays the last image.
   *Conversely, when the displayed image is the last one in the gallery, if the user clicks "Next Image," the gallery displays the first image.
   \*If there's only one image, the "Next" and "Previous" buttons don't appear.

2. The gallery must always maintain the same height as indicated in the Figma mockup. Therefore, images will be cropped and centered within the image frame.
   Collapse: By default, Collapses are closed when the page initializes.

3. If the Collapse is open, a user click should close it. Conversely, if the Collapse is closed, a click should open it.

### Technical Specifications:

1. Divide into modular and reusable components.
2. Logical file structure.
3. Use of events.
4. Utilize lists through iteration.
5. Use of props between components.
6. The 404 page is displayed for each nonexistent route or if a value present in the URL isn't part of the provided data.

### Languages Used:

HTML5 / CSS3 / SASS / JavaScript / React

### Acquired Skills:

Develop web application routes with React Router.
