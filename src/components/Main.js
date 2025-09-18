import { useEffect, useState } from "react"
import axios from "axios"
import MealDetails from "./MealDetails"

function Main() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [category, setCategory] = useState("seafood")
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem('mealFavorites')
        return saved ? JSON.parse(saved) : []
    })
    const [selectedMealId, setSelectedMealId] = useState(null)

    const categories = [
        "seafood", "beef", "chicken", "dessert", "lamb", "miscellaneous", 
        "pasta", "pork", "side", "starter", "vegan", "vegetarian"
    ]

    useEffect(() => {
        fetchMeals()
    }, [category]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        localStorage.setItem('mealFavorites', JSON.stringify(favorites))
    }, [favorites])

    const fetchMeals = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
            setItems(response.data.meals || [])
        } catch (err) {
            setError("Failed to fetch meals. Please try again.")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const toggleFavorite = (mealId) => {
        setFavorites(prev => 
            prev.includes(mealId) 
                ? prev.filter(id => id !== mealId)
                : [...prev, mealId]
        )
    }

    const filteredItems = items.filter(item => 
        item.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const itemsList = filteredItems.map(({strMeal, strMealThumb, idMeal}) => {
        const isFavorite = favorites.includes(idMeal)
        return (
            <article key={idMeal} className="meal-card" onClick={() => setSelectedMealId(idMeal)}>
                <div className="meal-image-container">
                    <img 
                        src={strMealThumb} 
                        alt={strMeal}
                        loading="lazy"
                    />
                    <button 
                        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(idMeal)
                        }}
                        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    >
                        ❤️
                    </button>
                </div>
                <div className="meal-info">
                    <h3 className="meal-title">{strMeal}</h3>
                    <p className="meal-id">#{idMeal}</p>
                    <button className="view-details-btn">View Details</button>
                </div>
            </article>
        )
    })

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading delicious meals...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
                <button onClick={fetchMeals} className="retry-btn">Try Again</button>
            </div>
        )
    }

    return (
        <div className="main-container">
            <header className="app-header">
                <h1>🍽️ Meal Explorer</h1>
                <p>Discover amazing recipes from around the world!</p>
            </header>
            
            <div className="controls">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search meals..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
                
                <div className="category-container">
                    <label htmlFor="category-select">Category:</label>
                    <select
                        id="category-select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="category-select"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>
                                {cat.charAt(0).toUpperCase() + cat.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="results-info">
                <p>Found {filteredItems.length} meal{filteredItems.length !== 1 ? 's' : ''}</p>
                {favorites.length > 0 && (
                    <p className="favorites-count">❤️ {favorites.length} favorite{favorites.length !== 1 ? 's' : ''}</p>
                )}
            </div>

            <div className="meals-container">
                {itemsList.length > 0 ? itemsList : (
                    <div className="no-results">
                        <p>No meals found matching your search.</p>
                        <button onClick={() => setSearchTerm("")} className="clear-search-btn">
                            Clear Search
                        </button>
                    </div>
                )}
            </div>

            <MealDetails 
                mealId={selectedMealId} 
                onClose={() => setSelectedMealId(null)} 
            />
        </div>
    )
}

export default Main
