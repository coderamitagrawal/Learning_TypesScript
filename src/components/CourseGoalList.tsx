import React from 'react';
import CourseGoals from './CourseGoals';
import { CourseGoals as CGoal } from '../App';
import InfoBox from './InfoBox';
import './CourseGoalList.css'; // Import the normal CSS file

interface goalList {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: goalList) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start doing some!
      </InfoBox>
    );
  }

  if (goals.length >= 4) {
    return (
      <InfoBox mode="warning">
        You are collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <div className="courseGoalsContainer">
      {goals.map((el) => (
        <div key={el.id} className="card">
          <div className="cardTitle">{el.title}</div>
          <div className="cardDescription">{el.description}</div>
          <button onClick={() => onDeleteGoal(el.id)}>Delete Goal</button>
        </div>
      ))}
    </div>
  );
};

export default CourseGoalList;
