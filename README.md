# HNG14 Stage 0 - Testable Todo Item Card

A high-fidelity, accessible, and responsive Task Card component built for the HNG14 Stage 0 Frontend track.

## Live Demo
- **Live URL:** [PASTE_YOUR_LIVE_LINK_HERE]

## Features
- **Semantic HTML:** Implements `<article>`, `<time>`, and proper heading structures.
- **Accessibility:** Includes ARIA labels and screen-reader-only labels for inputs.
- **Real-time Countdown:** JavaScript logic updates the "Time Remaining" hint every 30 seconds.
- **Responsive Design:** Optimized layout from 320px to 1200px using Tailwind CSS.
- **Test-Ready:** Implements all required `data-testid` attributes.

## How to Run Locally
1. Clone this repository.
2. Navigate to the project folder.
3. Open `index.html` in your web browser.

## Decisions & Trade-offs
- **Vanilla JavaScript:** Chosen for performance and to meet the stage requirements without unnecessary dependencies.
- **Tailwind CSS:** Used for professional, rapid UI development and high-fidelity styling.
- **Semantic Tags:** Used `<time>` tags for the due date and countdown hint to satisfy machine-readability requirements.
- **Time Logic:** Set a future `targetDate` to demonstrate the countdown functionality effectively for reviewers.

## Author
- **David Ajala**
- HNG14 Internship - Stage 0