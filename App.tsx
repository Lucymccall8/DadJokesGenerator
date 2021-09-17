import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router'

export default function App() {
  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  );
}


