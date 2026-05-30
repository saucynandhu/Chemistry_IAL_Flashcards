# Chemistry IAL Flashcards - Project Overview

This project is a lightweight, single-file flashcard web application designed for Pearson Edexcel International A-Level (IAL) Chemistry revision. It features a comprehensive deck of cards covering Units 1 through 6, including organic reaction pathways, energetics, group chemistry, and practical skills.

## Project Structure

- `index.html`: The core of the application. It contains all HTML structure, CSS styling, and JavaScript logic (including the flashcard data).
- `README.md`: Provides an overview of the project, features, and keyboard shortcuts.
- `LICENSE`: MIT License.

## Key Technologies

- **HTML5/CSS3**: Uses modern CSS features like CSS variables, Flexbox, Grid, and animations.
- **Vanilla JavaScript**: Handles all application logic, state management (score tracking, filtering, shuffling), and UI updates without any external dependencies or frameworks.
- **Google Fonts**: Uses 'DM Sans' and 'DM Mono' for typography.

## Architecture & Design

The application is built as a single-page application (SPA) contained within a single HTML file. 

- **Data Model**: Flashcards are stored as an array of objects (`ORIGINAL_CARDS`) within the `<script>` tag in `index.html`. Each card has properties for category (`cat`), question (`q`), answer (`a`), and optional details (`detail`).
- **State Management**: JavaScript variables track the current deck, current card index, score, and filter settings.
- **UI Components**: The app transitions between a home/setup screen, the active flashcard study interface, a settings/customization panel, and a results summary.
- **Features**: 
    - Category filtering based on IAL Chemistry units.
    - Score tracking (Knew it / Missed it).
    - Session results and percentage calculation.
    - Dark/Light mode (inferred from CSS structure, though primarily a light, paper-like theme).
    - Custom card addition and deck import/export (JSON based).

## Development Guidelines

### Building and Running
No build step is required.
- **To run**: Open `index.html` in any modern web browser.
- **Development**: Edit `index.html` directly. 

### Adding/Modifying Content
- To update the core flashcard deck, modify the `ORIGINAL_CARDS` array in the `<script>` section of `index.html`.
- For UI/UX changes, update the `<style>` or the HTML structure within the same file.

### Testing
- Manual testing is currently used. Verify changes by opening the file in a browser and testing the core interactions: flipping cards, scoring, filtering, and shuffling.
- Verify keyboard shortcuts (`Space`, `Enter`, `Arrow keys`, `K`, `M`) remain functional after changes.

## Commands
- **None**: This project has no `npm`, `make`, or other build system. It is purely static.
