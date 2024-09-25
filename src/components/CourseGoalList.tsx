import React from 'react';
import CourseGoals from './CourseGoals';
import { CourseGoals as CGoal } from '../App';

interface goalList {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList = ({ goals, onDeleteGoal }: goalList) => {
  return (
    <div>
      <ul>
        {goals.map((el) => {
          return (
            <li key={el.id}>
              <CourseGoals id={el.id} title={el.title} onDelete={onDeleteGoal}>
                <p>{el.description}</p>
              </CourseGoals>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CourseGoalList;
