"use client"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "@/pages/home";
import PokemonDetail from "@/pages/pokemondetail";




export default function App() {


  

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home/> } />
        <Route path="/pokemondetail/:id" element={<PokemonDetail />} />
        
        
      </Routes>
    </BrowserRouter>
  )
}








