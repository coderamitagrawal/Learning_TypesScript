import React, { Children, ReactNode, type FC } from 'react';
import './CourseGoals.css';

interface CourseGoalsProps {
  id: number;
  children: ReactNode;
  title: string;
  onDelete: (id: number) => void;
}

const CourseGoals: FC<CourseGoalsProps> = ({
  id,
  children,
  title,
  onDelete,
}: CourseGoalsProps) => {
  return (
    <article>
      <div className="container">
        {children}
        <h2>{title}</h2>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default CourseGoals;
