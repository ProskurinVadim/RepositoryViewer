import { Suspense, lazy, FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const BucketPage = lazy(() => import('../../pages/BucketPage'));

const App: FC = () => {

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL || ""}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<BucketPage/>} />
                </Routes>
            </Suspense>
        </BrowserRouter>

    )
}

export default App