import './bootstrap.css'
import DetailCourse from './component/DetailCourse'
import Home from './component/Home'
import Login from './component/Login'
import Register from './component/Register'
import CourseReg from './component/CourseReg'
import DetailLesson from './component/DetailLesson'
import './style.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import DetailQuiz from './component/DetailQuiz'
import Jump from './component/Jump'

function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path: "/detailcourse",
      element: <DetailCourse/>
    },
    {
      path: "/coursereg",
      element: <CourseReg/>
    },
    {
      path: "/detless",
      element: <DetailLesson/>
    },
    {
      path: "/detquiz",
      element: <DetailQuiz/>
    },

    {
      path: "/",
      element: <Login/>
    },

    {
      path: "/jump",
      element: <Jump/>
    },
  ])

  return (
<div>
<RouterProvider router={router}/>
</div>
  )
}

export default App
