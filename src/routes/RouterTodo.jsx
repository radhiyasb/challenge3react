import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage';
import TodoInputPage from '../pages/TodoInputPage';

function RouterTodo() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/TodoInput" element={<TodoInputPage />} />
          </Routes>
        </BrowserRouter>
      );
    }

export default RouterTodo;
