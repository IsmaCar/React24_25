import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { FavoriteProvider } from "./contexts/FavoritesContext";
import { ReviewsProvider } from "./contexts/ReviewContext";

const App = () => {
 
    return (
    <ReviewsProvider>
        <FavoriteProvider>
            <RouterProvider router={router} />
        </FavoriteProvider>
    </ReviewsProvider>

    )
  
}

export default App 