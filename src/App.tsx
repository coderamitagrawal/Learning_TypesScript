import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseGoals from './components/CourseGoals';
import Header from './components/Header';
import goal from './assests/goal.png';
import CourseGoalList from './components/CourseGoalList';
import NewGoal from './components/NewGoal';
import Input from './components/Input';
import Button from './components/Button';
export interface CourseGoals {
  title: string;
  description: string;
  id: number;
}
function App() {
  // const [goals, setGoals] = useState<CourseGoals[]>([]);
  // const handleAddGoal = (goal: string, summary: string) => {
  //   const newGoal = {
  //     title: goal,
  //     description: summary,
  //     id: Math.random(),
  //   };
  //   setGoals((prevGoals) => {
  //     return [...prevGoals, newGoal];
  //   });
  // };

  // const handleDeleteGoal = (id: number) => {
  //   setGoals((prevGoals) =>
  //     prevGoals.filter((goal) => {
  //       return goal.id !== id;
  //     })
  //   );
  // };

  return (
    // {/* <Header image={{ src: goal, alt: 'A list of goal' }} />
    // <button onClick={handleAddGoal}>Add Goal</button>
    // <NewGoal onAddGoal={handleAddGoal} />
    // <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} /> */}
    <main style={{ backgroundColor: 'white' }}>
      <Input label="name" id="Your Name" />
      <Input label="age" id="Your Age" type="number" />
      <Button el="button" />
      <Button el="anchor" href="https://www.google.com" />
    </main>
  );
}

export default App;
