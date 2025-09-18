import { useState, useEffect } from 'react'
import axios from 'axios'

function MealDetails({ mealId, onClose }) {
    const [mealDetails, setMealDetails] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (mealId) {
            fetchMealDetails()
        }
    }, [mealId]) // eslint-disable-line react-hooks/exhaustive-deps

    const fetchMealDetails = async () => {
        setLoading(true)
        setError(null)
        try {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
            setMealDetails(response.data.meals?.[0])
        } catch (err) {
            setError("Failed to fetch meal details")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const getIngredients = (meal) => {
        const ingredients = []
        for (let i = 1; i <= 20; i++) {
            const ingredient = meal[`strIngredient${i}`]
            const measure = meal[`strMeasure${i}`]
            if (ingredient && ingredient.trim()) {
                ingredients.push({ ingredient, measure })
            }
        }
        return ingredients
    }

    if (!mealId) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                
                {loading && (
                    <div className="modal-loading">
                        <div className="spinner"></div>
                        <p>Loading meal details...</p>
                    </div>
                )}

                {error && (
                    <div className="modal-error">
                        <p>{error}</p>
                        <button onClick={fetchMealDetails}>Try Again</button>
                    </div>
                )}

                {mealDetails && (
                    <div className="meal-details">
                        <div className="meal-details-header">
                            <img 
                                src={mealDetails.strMealThumb} 
                                alt={mealDetails.strMeal}
                                className="meal-details-image"
                            />
                            <div className="meal-details-info">
                                <h2>{mealDetails.strMeal}</h2>
                                <p className="meal-category">{mealDetails.strCategory}</p>
                                {mealDetails.strArea && (
                                    <p className="meal-area">📍 {mealDetails.strArea}</p>
                                )}
                            </div>
                        </div>

                        <div className="meal-details-content">
                            <div className="ingredients-section">
                                <h3>Ingredients</h3>
                                <div className="ingredients-grid">
                                    {getIngredients(mealDetails).map((item, index) => (
                                        <div key={index} className="ingredient-item">
                                            <span className="ingredient-name">{item.ingredient}</span>
                                            <span className="ingredient-measure">{item.measure}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="instructions-section">
                                <h3>Instructions</h3>
                                <div className="instructions-text">
                                    {mealDetails.strInstructions.split('\n').map((paragraph, index) => (
                                        paragraph.trim() && (
                                            <p key={index}>{paragraph.trim()}</p>
                                        )
                                    ))}
                                </div>
                            </div>

                            {mealDetails.strYoutube && (
                                <div className="video-section">
                                    <h3>Video Tutorial</h3>
                                    <a 
                                        href={mealDetails.strYoutube} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="youtube-link"
                                    >
                                        🎥 Watch on YouTube
                                    </a>
                                </div>
                            )}

                            {mealDetails.strSource && (
                                <div className="source-section">
                                    <h3>Source</h3>
                                    <a 
                                        href={mealDetails.strSource} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="source-link"
                                    >
                                        🔗 View Original Recipe
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default MealDetails
