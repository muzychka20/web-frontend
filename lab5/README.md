# Football League API

This project is a React application that fetches and displays football leagues using the Football API from RapidAPI. Users can view a list of leagues and click on them to see more details.

## Features

- Display a list of football leagues.
- Clickable links to view league details.
- Responsive design with a clean UI.

## Technologies Used

- React
- Axios
- React Router
- TypeScript

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node package manager)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/muzychka20/web-frontend
```

2. Navigate to the project directory: 
```bash
cd lab5
```

3. Install the dependencies:
```bash
npm install
```

4. Replace the API key in the LeagueList component with your own RapidAPI key. You can obtain it by signing up on RapidAPI.
```bash
axios.defaults.headers["x-rapidapi-key"] = "YOUR_RAPIDAPI_KEY";
```

5. Start the development server:
```bash
npm start
```

## Components

### LeagueList
Fetches and displays a list of football leagues.
Each league is clickable and links to its details page.

### LeagueDetails
Displays detailed information about the selected league.

## Styles
The application uses CSS for styling. The styles are defined in the LeagueList component and provide a clean and modern design.