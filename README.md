# 🍽️ Meal Explorer

<div align="center">

![Meal Explorer](https://img.shields.io/badge/Meal-Explorer-orange?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)
![API](https://img.shields.io/badge/API-TheMealDB-green?style=for-the-badge&logo=api)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)

**Discover amazing recipes from around the world with this beautiful and interactive meal exploration app!**

[🚀 Live Demo](#-live-demo) • [📱 Features](#-features) • [🛠️ Installation](#️-installation) • [📖 Usage](#-usage) • [🎨 Screenshots](#-screenshots)

</div>

---

## 🌟 Overview

Meal Explorer is a modern, responsive React application that allows users to discover and explore delicious recipes from around the world. Built with React 19 and powered by TheMealDB API, it provides an intuitive interface for browsing meals by category, searching for specific dishes, and viewing detailed recipe information.

### ✨ Key Highlights

- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 📱 **Fully Responsive** - Optimized for all device sizes
- 🔍 **Smart Search** - Real-time meal filtering and search
- ❤️ **Favorites System** - Save your favorite meals locally
- 📋 **Detailed Recipes** - Complete ingredients, instructions, and video tutorials
- 🌍 **Global Cuisine** - Explore meals from different countries and cultures
- ⚡ **Fast Performance** - Optimized loading and smooth interactions

---

## 🚀 Live Demo

Experience Meal Explorer in action! The app is designed to work seamlessly across all devices.

**🔗 [Try it now!](#)** *(Add your deployment URL here)*

---

## 📱 Features

### 🔍 **Smart Search & Filtering**
- Real-time search across meal names
- Category-based filtering (12+ categories)
- Instant results with smooth animations

### ❤️ **Favorites Management**
- Add/remove meals from favorites
- Persistent storage using localStorage
- Visual favorite indicators

### 📋 **Detailed Recipe View**
- Complete ingredient lists with measurements
- Step-by-step cooking instructions
- High-quality meal images
- YouTube video tutorials (when available)
- Original recipe source links

### 🎨 **Beautiful Design**
- Modern gradient backgrounds
- Smooth hover animations
- Glass-morphism effects
- Responsive grid layout
- Loading states and error handling

### 🌍 **Global Cuisine Categories**
- Seafood 🐟
- Beef 🥩
- Chicken 🐔
- Dessert 🍰
- Lamb 🐑
- Miscellaneous 🍽️
- Pasta 🍝
- Pork 🐷
- Side dishes 🥗
- Starters 🥘
- Vegan 🌱
- Vegetarian 🥕

---

## 🛠️ Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/meal-explorer.git
   cd meal-explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📖 Usage

### Getting Started

1. **Browse Meals**: The app loads with seafood meals by default. Use the category dropdown to explore different types of cuisine.

2. **Search**: Type in the search box to find specific meals by name.

3. **View Details**: Click on any meal card to see the full recipe with ingredients and instructions.

4. **Save Favorites**: Click the heart icon on any meal to add it to your favorites list.

5. **Watch Tutorials**: If available, click the YouTube link to watch video tutorials.

### Navigation Tips

- **Category Filter**: Use the dropdown to switch between different meal categories
- **Search**: Type partial meal names for instant filtering
- **Favorites**: Your favorites are saved automatically and persist between sessions
- **Modal Details**: Click outside the modal or the × button to close recipe details

---

## 🎨 Screenshots

<div align="center">

### 🏠 Main Interface
![Main Interface](https://via.placeholder.com/800x400/667eea/ffffff?text=Main+Interface+with+Meal+Cards)

### 📋 Recipe Details
![Recipe Details](https://via.placeholder.com/800x400/764ba2/ffffff?text=Detailed+Recipe+View)

### 📱 Mobile View
![Mobile View](https://via.placeholder.com/400x600/ff6b6b/ffffff?text=Mobile+Responsive+Design)

</div>

---

## 🏗️ Project Structure

```
meal-api/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── Main.js          # Main application component
│   │   └── MealDetails.js   # Recipe details modal
│   ├── App.js               # Root component
│   ├── App.css              # Main styles
│   ├── index.js             # Application entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

### Frontend
- **React 19.1.1** - Modern React with latest features
- **Axios** - HTTP client for API requests
- **CSS3** - Modern styling with gradients and animations

### API
- **TheMealDB** - Free meal database API
  - Filter by category: `https://www.themealdb.com/api/json/v1/1/filter.php?c={category}`
  - Get meal details: `https://www.themealdb.com/api/json/v1/1/lookup.php?i={mealId}`

### Development Tools
- **Create React App** - Development environment
- **ESLint** - Code linting
- **Web Vitals** - Performance monitoring

---

## 🚀 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm run build`
Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

---

## 🎯 Features in Detail

### 🔍 Search Functionality
- **Real-time filtering**: Search results update as you type
- **Case-insensitive**: Works with any capitalization
- **Partial matching**: Find meals with partial name matches

### ❤️ Favorites System
- **Local storage**: Favorites persist between browser sessions
- **Visual feedback**: Heart icon changes color when favorited
- **Easy management**: Click to add/remove favorites

### 📱 Responsive Design
- **Mobile-first**: Optimized for mobile devices
- **Tablet support**: Great experience on tablets
- **Desktop enhanced**: Full features on larger screens

### ⚡ Performance Optimizations
- **Lazy loading**: Images load as needed
- **Efficient rendering**: Only re-render changed components
- **Smooth animations**: CSS transitions for better UX

---

## 🌐 API Integration

The app integrates with [TheMealDB API](https://www.themealdb.com/api.php) to provide:

- **Meal filtering** by category
- **Detailed recipe information** including ingredients and instructions
- **High-quality images** for each meal
- **Video tutorials** (when available)
- **Source links** to original recipes

### API Endpoints Used:
- `GET /filter.php?c={category}` - Get meals by category
- `GET /lookup.php?i={mealId}` - Get detailed meal information

---

## 🎨 Design Philosophy

### Color Scheme
- **Primary**: Purple gradient (`#667eea` to `#764ba2`)
- **Accent**: Coral red (`#ff6b6b`)
- **Background**: Gradient with glass-morphism effects
- **Text**: High contrast for accessibility

### Typography
- **Font**: Segoe UI system font stack
- **Hierarchy**: Clear heading and body text distinction
- **Readability**: Optimized line heights and spacing

### Animations
- **Hover effects**: Subtle lift and shadow changes
- **Loading states**: Smooth spinners and transitions
- **Modal transitions**: Smooth fade and scale effects

---

## 🔧 Customization

### Adding New Categories
To add new meal categories, update the `categories` array in `Main.js`:

```javascript
const categories = [
    "seafood", "beef", "chicken", "dessert", "lamb", 
    "miscellaneous", "pasta", "pork", "side", "starter", 
    "vegan", "vegetarian", "your-new-category"
]
```

### Styling Modifications
The app uses CSS custom properties and modern CSS features. Key styling files:
- `src/App.css` - Main component styles
- `src/index.css` - Global styles

### API Configuration
The API base URL is configured in the component files. To use a different API:
1. Update the base URL in `Main.js` and `MealDetails.js`
2. Adjust the response data mapping if needed

---

## 🐛 Troubleshooting

### Common Issues

**App won't start:**
- Ensure Node.js version 14+ is installed
- Run `npm install` to install dependencies
- Check for port conflicts (default: 3000)

**API requests failing:**
- Check internet connection
- Verify TheMealDB API is accessible
- Check browser console for error messages

**Favorites not saving:**
- Ensure localStorage is enabled in your browser
- Check browser storage permissions

**Images not loading:**
- Check internet connection
- Verify image URLs in API response
- Check browser console for CORS issues

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🐛 Bug Reports
- Use the issue tracker to report bugs
- Include steps to reproduce the issue
- Provide browser and device information

### 💡 Feature Requests
- Suggest new features via issues
- Describe the use case and benefits
- Consider implementation complexity

### 🔧 Code Contributions
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### 📝 Code Style
- Follow existing code patterns
- Use meaningful variable names
- Add comments for complex logic
- Ensure responsive design principles

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **[TheMealDB](https://www.themealdb.com/)** - For providing the amazing free meal database API
- **[React](https://reactjs.org/)** - For the powerful frontend framework
- **[Create React App](https://create-react-app.dev/)** - For the development environment
- **Open source community** - For inspiration and support

---

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: your-email@example.com
- 🐛 **Issues**: [GitHub Issues](https://github.com/yourusername/meal-explorer/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/yourusername/meal-explorer/discussions)

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Your Name](https://github.com/yourusername)

[⬆ Back to Top](#-meal-explorer)

</div>