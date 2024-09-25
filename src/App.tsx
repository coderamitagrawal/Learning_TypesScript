import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseGoals from './components/CourseGoals';
import Header from './components/Header';
import goal from './assests/goal.png';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';

export interface CourseGoals {
  title: string;
  description: string;
  id: number;
}

function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);
  const handleAddGoal = (goal: string, summary: string) => {
    const newGoal = {
      title: goal,
      description: summary,
      id: Math.random(),
    };
    setGoals((prevGoals) => {
      return [...prevGoals, newGoal];
    });
  };

  const handleDeleteGoal = (id: number) => {
    setGoals((prevGoals) =>
      prevGoals.filter((goal) => {
        return goal.id !== id;
      })
    );
  };

  return (
    <main>
      <Header image={{ src: goal, alt: 'A list of goal' }} />
      {/* <button onClick={handleAddGoal}>Add Goal</button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}

export default App;
